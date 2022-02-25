const { chromium } = require('playwright');

const main = async () => {
  const url = `https://akshaykadam.com/essay/demystifying-copy-ai-growth-from-0-to-100k-mrr-in-223-days`
  const pdfPath = `pdfs/${url.replace("https://akshaykadam.com/essay/","")}.pdf`


  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(url, {
    timeout: 120000
  })
  await page.pdf({ path: pdfPath })
  await browser.close()
}

main()
