import user from "./user"
import post from "./post"
import tutorial from "./tutorial"
import saas from "./saas"
import app from "./app"
import media from "./media"
import team from "./team"
import member from "./member"
import orgnization from "./orgnization"
import feedback from "./feedback"
import roadmap from "./roadmap"
import highlight from "./highlight"
import solution from "./solution"
import storie from "./stories"
import device from "./device"
import apikey from "./apikey"
import access_card from "./access_card"
import event from "./event"
import proposal from "./proposal"
import testimonial from "./testimonial"
import client from "./client"
import feature from "./feature"
import type { CollectionConfig } from "kernelcms"


export const collections=({core={}}:any):CollectionConfig[]=>[
    user as CollectionConfig,
    post({core}) as CollectionConfig,
    media({core}) as CollectionConfig,
    tutorial({core}) as CollectionConfig,
    saas({core})  as CollectionConfig,
    member({core})  as CollectionConfig,
    team({core})  as CollectionConfig,
    app({core}) as CollectionConfig,
    feedback({core}) as CollectionConfig,
    roadmap({core}) as CollectionConfig,
    highlight({core}) as CollectionConfig,
    solution({core}) as CollectionConfig,
    storie({core}) as CollectionConfig,
    device({core}) as CollectionConfig,
    apikey({core}) as CollectionConfig,
    access_card({core}) as CollectionConfig,
    event({core}) as CollectionConfig,
    proposal({core}) as CollectionConfig,
    testimonial({core}) as CollectionConfig,
    client({core}) as CollectionConfig,
    feature({core}) as CollectionConfig,
    orgnization({core}) as CollectionConfig
  
    ]