import { Component } from "vue";

export interface SiteLink { 
    show?: boolean,
    icon: Component | string,
    name: string,
    link: string
}({
    show: true
})

export interface SocialLink { 
    name: string,
    icon: string,
    tip: string,
    url: string
}
