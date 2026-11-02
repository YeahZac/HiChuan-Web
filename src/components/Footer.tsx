import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="display text-2xl">{site.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
            {site.description}
          </p>
          <p className="mt-5 text-sm text-white/60">域名：{site.domain}</p>
        </div>
        <div>
          <p className="text-sm font-semibold">核心服务</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">联系我们</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>电话：{site.phone}</li>
            <li>微信：{site.wechat}</li>
            <li>邮箱：{site.email}</li>
            <li>公众号：{site.mpName}</li>
            <li className="leading-6">{site.address}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <div className="rounded-lg bg-white p-2">
              <Image
                src="/qr/wechat-nihaozac.jpg"
                alt={`微信 ${site.wechat} 二维码`}
                width={88}
                height={88}
              />
              <p className="mt-1 text-center text-[10px] text-ink">个人微信</p>
            </div>
            <div className="rounded-lg bg-white p-2">
              <Image
                src="/qr/mp-xingma.png"
                alt={`${site.mpName} 公众号二维码`}
                width={88}
                height={88}
              />
              <p className="mt-1 text-center text-[10px] text-ink">公众号</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {site.name} · {site.domain}
      </div>
    </footer>
  );
}
