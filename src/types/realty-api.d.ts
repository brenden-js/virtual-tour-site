export type APIListHouseResponse = {
    data: Data;
}

export type Data = {
    home_search: HomeSearch;
}

export type HomeSearch = {
    __typename: string;
    count:      number;
    total:      number;
    results:    Result[];
}

export type Result = {
    __typename:           ResultTypename;
    property_id:          string;
    listing_id:           string;
    plan_id:              null;
    status:               Status;
    photo_count:          number;
    branding:             Branding[];
    location:             Location;
    description:          Description;
    virtual_tours:        PrimaryPhoto[] | null;
    matterport:           boolean;
    advertisers:          Advertiser[];
    flags:                Flags;
    source:               Source;
    pet_policy:           PetPolicy | null;
    community:            null;
    primary_photo:        PrimaryPhoto;
    href:                 string;
    list_price:           number;
    list_price_min:       null;
    list_price_max:       null;
    price_reduced_amount: number | null;
    estimate:             Estimate | null;
    lead_attributes:      LeadAttributes;
    products:             Products | null;
    last_sold_price:      number | null;
}

export enum ResultTypename {
    SearchHome = "SearchHome",
}

export type Advertiser = {
    __typename:     AdvertiserTypename;
    fulfillment_id: string;
    name:           string;
    email:          null | string;
    href:           null | string;
    slogan:         null | string;
    type:           AdvertiserType;
}

export enum AdvertiserTypename {
    HomeAdvertiser = "HomeAdvertiser",
}

export enum AdvertiserType {
    Seller = "seller",
}

export type Branding = {
    __typename: BrandingTypename;
    photo:      null;
    name:       string;
    phone:      null;
    link:       null;
}

export enum BrandingTypename {
    Branding = "Branding",
}

export type Description = {
    __typename:         DescriptionTypename;
    sub_type:           SubType | null;
    type:               DescriptionType;
    beds:               number | null;
    baths:              number | null;
    lot_sqft:           number;
    sqft:               number | null;
    beds_max:           null;
    beds_min:           null;
    sqft_max:           null;
    sqft_min:           null;
    baths_full:         number | null;
    baths_half:         number | null;
    baths_min:          null;
    baths_max:          null;
    baths_full_calc:    number | null;
    baths_partial_calc: number | null;
}

export enum DescriptionTypename {
    SearchHomeDescription = "SearchHomeDescription",
}

export enum SubType {
    Condo = "condo",
    Townhouse = "townhouse",
}

export enum DescriptionType {
    Condos = "condos",
    DuplexTriplex = "duplex_triplex",
    Land = "land",
    MultiFamily = "multi_family",
    SingleFamily = "single_family",
    Townhomes = "townhomes",
}

export type Estimate = {
    __typename: EstimateTypename;
    estimate:   number;
}

export enum EstimateTypename {
    LatestEstimate = "LatestEstimate",
}

export type Flags = {
    __typename:          FlagsTypename;
    is_price_reduced:    boolean | null;
    is_new_construction: boolean | null;
    is_foreclosure:      null;
    is_plan:             null;
    is_new_listing:      boolean;
    is_coming_soon:      null;
    is_contingent:       boolean | null;
    is_pending:          boolean | null;
}

export enum FlagsTypename {
    HomeFlags = "HomeFlags",
}

export type LeadAttributes = {
    __typename:             LeadAttributesTypename;
    lead_type:              LeadType;
    show_contact_an_agent:  boolean;
    opcity_lead_attributes: OpcityLeadAttributes;
}

export enum LeadAttributesTypename {
    LeadAttributes = "LeadAttributes",
}

export enum LeadType {
    CoBroke = "co_broke",
    CoreAgent = "core.agent",
    CoreBroker = "core.broker",
}

export type OpcityLeadAttributes = {
    __typename:              OpcityLeadAttributesTypename;
    flip_the_market_enabled: boolean;
}

export enum OpcityLeadAttributesTypename {
    OpCityLeadAttributes = "OpCityLeadAttributes",
}

export type Location = {
    __typename:      LocationTypename;
    address:         Address;
    street_view_url: string;
    county:          County;
}

export enum LocationTypename {
    SearchHomeLocation = "SearchHomeLocation",
}

export type Address = {
    __typename:    AddressTypename;
    city:          City;
    line:          string;
    street_name:   string;
    street_number: string;
    street_suffix: StreetSuffix;
    country:       Country;
    postal_code:   string;
    state_code:    StateCode;
    state:         State;
    coordinate:    Coordinate;
}

export enum AddressTypename {
    SearchHomeAddress = "SearchHomeAddress",
}

export enum City {
    LosAngeles = "Los Angeles",
}

export type Coordinate = {
    __typename: CoordinateTypename;
    lat:        number;
    lon:        number;
    accuracy:   null;
}

export enum CoordinateTypename {
    Coordinate = "Coordinate",
}

export enum Country {
    Usa = "USA",
}

export enum State {
    California = "California",
}

export enum StateCode {
    CA = "CA",
}

export enum StreetSuffix {
    Ave = "Ave",
    Blvd = "Blvd",
    DR = "Dr",
    Pl = "Pl",
    St = "St",
    Way = "Way",
}

export type County = {
    __typename: CountyTypename;
    fips_code:  string;
}

export enum CountyTypename {
    HomeCounty = "HomeCounty",
}


export type PetPolicy = {
    __typename: string;
    cats:       boolean;
    dogs:       boolean;
}

export type PrimaryPhoto = {
    __typename: PrimaryPhotoTypename;
    href:       string;
}

export enum PrimaryPhotoTypename {
    Photo = "Photo",
    VirtualTour = "VirtualTour",
}

export type Products = {
    __typename: ProductsTypename;
    brand_name: BrandName;
    products:   LeadType[];
}

export enum ProductsTypename {
    ProductSummary = "ProductSummary",
}

export enum BrandName {
    BasicOptIn = "basic_opt_in",
    Essentials = "essentials",
}

export type Source = {
    __typename:   SourceTypename;
    agents:       Agent[];
    id:           ID;
    type:         SourceType;
    spec_id:      null;
    plan_id:      null;
    listing_href: null;
    listing_id:   string;
}

export enum SourceTypename {
    MlsSource = "MlsSource",
}

export type Agent = {
    __typename:  AgentTypename;
    id:          ID;
    agent_id:    string;
    agent_name:  string;
    office_id:   string;
    office_name: null | string;
}

export enum AgentTypename {
    MlsAgent = "MlsAgent",
}

export enum ID {
    Mrca = "MRCA",
    Weca = "WECA",
}

export enum SourceType {
    Mls = "mls",
}

export enum Status {
    ForSale = "for_sale",
}
