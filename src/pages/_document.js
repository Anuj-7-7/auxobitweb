// src/pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>{`
            #__splash {
              position: fixed;
              inset: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #fff;
              z-index: 9999;
            }
            #__splash img {
              width: 96px;
              height: 96px;
              animation: bounce 1s ease-in-out infinite;
            }
            @keyframes bounce {
              0%,100% { transform: translateY(0); }
              50%     { transform: translateY(-15px); }
            }
          `}</style>
        </Head>
        <body>
          <div id="__splash">
            <img src="/images/auxLogoBlack.png" alt="Loading..." />
          </div>
          <Main />
          <NextScript />
          <script dangerouslySetInnerHTML={{__html: `
            window.addEventListener('load', () => {
              const s = document.getElementById('__splash');
              s.style.transition = 'opacity .3s';
              s.style.opacity = '0';
              setTimeout(() => s.remove(), 400);
            });
          `}}/>
        </body>
      </Html>
    )
  }
}

export default MyDocument
