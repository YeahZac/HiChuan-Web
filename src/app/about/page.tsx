import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于我们｜海川众核科技有限公司",
  description: `${site.name}位于${site.address}，专注企业数字化与智能化定制开发。`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="display text-4xl">关于 {site.shortName}</h1>
          <p className="mt-5 leading-8 text-muted">{site.description}</p>
          <p className="mt-4 leading-8 text-muted">
            我们服务需要真正上线、真正产生业务结果的企业客户：不只做页面，更做交易链路、履约链路与长期可维护的系统。
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted">公司</dt>
              <dd className="font-medium">{site.name}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted">地址</dt>
              <dd className="font-medium">{site.address}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-20 shrink-0 text-muted">官网</dt>
              <dd className="font-medium">{site.domain}</dd>
            </div>
          </dl>
          <Link href="/contact" className="btn-primary mt-8">
            联系我们
          </Link>
        </div>
        <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
          <Image
            src="/images/hero-enterprise-office.jpg"
            alt={`${site.name}办公环境`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
