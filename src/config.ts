import { Book, Server, ChartBar } from "@vicons/fa";
import { SiteLink, SocialLink } from "./types";

// 图标可前往 https://www.xicons.org 自行挑选
export const siteLinks: SiteLink[] = [
    {
        icon: Book,
        name: 'Ikaros Project',
        link: 'https://ikaros.run/'
    },
    {
        icon: Server,
        name: 'Ikaros Status',
        link: 'https://status.ikaros.run/status/ikaros'
    },
    {
        icon: ChartBar,
        name: 'Ikaros Analytics',
        link: 'https://analytics.ikaros.run/share/HpFEzaaekV9NOCZn/ikaros%20docs'
    }
]

export const socialLinks: SocialLink[] = [
    {
        name: "Github",
        icon: "/images/icon/github.png",
        tip: "去 Github 看看",
        url: "https://github.com/li-guohao"
      },
      {
        name: "BiliBili",
        icon: "/images/icon/bilibili.png",
        tip: "哔哩哔哩 干杯 ~",
        url: "https://space.bilibili.com/3493285257546598"
      },
      {
        name: "Email",
        icon: "/images/icon/email.png",
        tip: "发封 Email ~",
        url: "mailto:message@liguohao.cn"
      }
] 
