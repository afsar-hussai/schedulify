import "./../globals.css";
import {Noto_Sans} from "next/font/google";

export const metadata = {
  title: 'Schedulify',
  description: 'Seamlessly coordinate and schedule events by dynamically matching user availability for effortless planning.',
}

const noto = Noto_Sans({subsets: ['latin'], weight: ['300', '400', '600', '700']});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={noto.className}>
      <body>{children}</body>
    </html>
  )
}