const puppeteer = require('puppeteer');

async function runBot() {
  // Iniciar o navegador
  const browser = await puppeteer.launch();

  // Abrir uma nova página
  const page = await browser.newPage();

  // Navegar para o site alvo
  await page.goto('https://www.example.com');

  // Executar ações no site
  await page.type('input[name="username"]', 'usuario');
  await page.type('input[name="password"]', 'senha');
  await page.click('button[type="submit"]');

  // Aguardar o redirecionamento ou carregamento de outra página
  await page.waitForNavigation();

  // Executar mais ações
  await page.click('.call');
  await page.waitForSelector('#callme');

  // Fechar o navegador
  await browser.close();
}

runBot();
