export type ServicePricing = {
  basePrice: number,
  tierOnePpsqft: number,
  tierTwoPpsqft: number
  tierThreePpsqft: number,
  tierFourPpsqft: number
}

export interface RegionData {
  tour_and_floorplans: ServicePricing,
  tour_only: ServicePricing,
}

export type AllRegionData = {
  SWR: RegionData,
  NSD: RegionData,
  SOC: RegionData,
  none: RegionData
}

export const allCachedRegionData: AllRegionData = {
    NSD: {
      'tour_only': {
        basePrice: 199.00,
        tierOnePpsqft: .09,
        tierTwoPpsqft: .08,
        tierThreePpsqft: .07,
        tierFourPpsqft: .06
      },
      'tour_and_floorplans': {
        basePrice: 212.00,
        tierOnePpsqft: .09,
        tierTwoPpsqft: .08,
        tierThreePpsqft: .07,
        tierFourPpsqft: .06
      },
    },
    SOC: {
      'tour_only': {
        basePrice: 199.00,
        tierOnePpsqft: .09,
        tierTwoPpsqft: .08,
        tierThreePpsqft: .07,
        tierFourPpsqft: .06
      },
      'tour_and_floorplans': {
        basePrice: 212.00,
        tierOnePpsqft: .09,
        tierTwoPpsqft: .08,
        tierThreePpsqft: .07,
        tierFourPpsqft: .06
      },
    },
    SWR: {
      'tour_only': {
        basePrice: 99.00,
        tierOnePpsqft: .04,
        tierTwoPpsqft: .03,
        tierThreePpsqft: .025,
        tierFourPpsqft: .02
      },
      'tour_and_floorplans': {
        basePrice: 112.00,
        tierOnePpsqft: .04,
        tierTwoPpsqft: .03,
        tierThreePpsqft: .025,
        tierFourPpsqft: .02
      },
    },
    none: {
      'tour_only': {
        basePrice: 0.00,
        tierOnePpsqft: .00,
        tierTwoPpsqft: .00,
        tierThreePpsqft: .00,
        tierFourPpsqft: .00
      },
      'tour_and_floorplans': {
        basePrice: 0.00,
        tierOnePpsqft: .00,
        tierTwoPpsqft: .00,
        tierThreePpsqft: .00,
        tierFourPpsqft: .00
      },
    },
  }
const dynamicQuoteGenerator = (servicePricing: ServicePricing, sqft: number) => {
  if (!servicePricing) return 0
  if (!sqft) return 0
  // first 1k
  if (sqft <= 999) {
    return servicePricing.basePrice
  }

  // next 1k
  if (sqft <= 1999) {
    return servicePricing.basePrice + ((sqft - 999) * servicePricing.tierOnePpsqft)
  }

  // next 1k
  if (sqft <= 2999) {
    return servicePricing.basePrice + // first 1k
      1000 * servicePricing.tierOnePpsqft + // next 1k
      ((sqft - 1999) * servicePricing.tierTwoPpsqft) // remainder 1k
  }

  if (sqft <= 3999) {
    return servicePricing.basePrice + // first 1k
      1000 * servicePricing.tierOnePpsqft + // next 1k
      1000 * servicePricing.tierTwoPpsqft + // next 1k
      ((sqft - 2999)) * servicePricing.tierThreePpsqft // remainder
  }

  if (sqft > 3999) {
    return servicePricing.basePrice + // first 1k
      1000 * servicePricing.tierOnePpsqft + // next 1k
      1000 * servicePricing.tierTwoPpsqft + // next 1k
      1000 * servicePricing.tierThreePpsqft + // next 1k
      ((sqft - 3999)) * servicePricing.tierFourPpsqft  // remainder
  }
  return 0
}

export default dynamicQuoteGenerator;