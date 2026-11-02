import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "联系我们｜免费评估小程序/APP/AI开发需求",
  description: `联系${site.name}：电话${site.phone}，微信${site.wechat}，邮箱${site.email}，地址${site.address}。`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="display text-4xl">联系与免费评估</h1>
          <p className="mt-4 max-w-xl leading-8 text-muted">
            留下业务目标与现状，或直接扫码加微信。我们通常在工作日快速回复可执行建议与预算区间。
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card">
              <p className="text-xs text-muted">电话</p>
              <a href={`tel:${site.phone}`} className="mt-1 block text-lg font-semibold">
                {site.phone}
              </a>
            </div>
            <div className="card">
              <p className="text-xs text-muted">邮箱</p>
              <a href={`mailto:${site.email}`} className="mt-1 block text-lg font-semibold">
                {site.email}
              </a>
            </div>
            <div className="card">
              <p className="text-xs text-muted">微信</p>
              <p className="mt-1 text-lg font-semibold">{site.wechat}</p>
            </div>
            <div className="card">
              <p className="text-xs text-muted">公众号</p>
              <p className="mt-1 text-lg font-semibold">{site.mpName}</p>
            </div>
          </div>

          <div className="card mt-4">
            <p className="text-xs text-muted">公司地址</p>
            <p className="mt-1 font-medium leading-7">{site.address}</p>
          </div>

          <form className="card mt-6 grid gap-4" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <p className="font-semibold">快速留言（将调用本地邮件客户端）</p>
            <label className="grid gap-1 text-sm">
              <span className="text-muted">称呼</span>
              <input name="name" required className="rounded-lg border border-line px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-muted">联系方式</span>
              <input name="contact" required className="rounded-lg border border-line px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-muted">需求简述</span>
              <textarea name="need" rows={4} required className="rounded-lg border border-line px-3 py-2" />
            </label>
            <button type="submit" className="btn-primary w-fit">
              发送评估请求
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6">
          <h2 className="text-lg font-semibold">扫码联系</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="text-center">
              <div className="mx-auto w-fit rounded-xl border border-line p-3">
                <Image
                  src="/qr/wechat-nihaozac.jpg"
                  alt={`微信 ${site.wechat}`}
                  width={180}
                  height={180}
                />
              </div>
              <p className="mt-3 text-sm font-medium">个人微信 · {site.wechat}</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-fit rounded-xl border border-line p-3">
                <Image
                  src="/qr/mp-xingma.png"
                  alt={`${site.mpName} 公众号`}
                  width={180}
                  height={180}
                />
              </div>
              <p className="mt-3 text-sm font-medium">公众号 · {site.mpName}</p>
            </div>
          </div>
          <p className="mt-8 text-xs leading-6 text-muted">
            提示：正式环境建议接入表单 API + 数据库留资；当前版本优先保证 SEO 与转化路径上线。
          </p>
        </div>
      </div>
    </div>
  );
}
