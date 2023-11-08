"use client"
import Head from 'next/head'
import {Host} from '@/components/learn/host'
import {Hero} from '@/components/learn/hero'
import {NavBar} from '@/components/learn/nav-bar'
import {Pay} from '@/components/learn/pay'
import {Upload} from '@/components/learn/upload'
import {Capture} from '@/components/learn/capture'
import {Book} from '@/components/learn/book'


export default function Learn() {
  return (
    <>
      <Head>
        <title>
        About our full-service 3D tour and capture service process.
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <NavBar />
      <Book />
      <Capture />
      <Upload />
      <Pay />
      <Host />
    </>
  )
}
