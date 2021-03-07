import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="title">Something new is cooking</h1>

      <a
        href="mailto:martosjosele@gmail.com?subject=Hi%20Jose"
        title="Say hi to Jose"
        className="email link link--effect"
      >
        <span>drop me @ line</span>
      </a>

      <style jsx>{`
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2.25rem;
          font-weight: 400;
          color: #fff;
          margin-bottom: 20px;
          animation: fadein 1s;
        }

        .email {
          color: #fff;
          font-size: 1.5rem;
          font-weight: 200;
          animation: fadein 1s;
        }

        .link {
          cursor: pointer;
          position: relative;
          white-space: nowrap;
        }

        @keyframes fadein {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .link::before,
        .link::after {
          position: absolute;
          width: 100%;
          height: 2px;
          background: currentColor;
          top: 100%;
          left: 0;
          pointer-events: none;
        }

        .link::before {
          content: "";
          /* show by default */
        }

        .link--effect::before {
          transform-origin: 50% 100%;
          transition: clip-path 0.3s,
            transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
          clip-path: polygon(
            0% 0%,
            0% 100%,
            0 100%,
            0 0,
            100% 0,
            100% 100%,
            0 100%,
            0 100%,
            100% 100%,
            100% 0%
          );
        }

        .link--effect:hover::before {
          transform: translate3d(0, 1px, 0) scale3d(1.08, 1, 1);
          clip-path: polygon(
            0% 0%,
            0% 100%,
            50% 100%,
            50% 0,
            50% 0,
            50% 100%,
            50% 100%,
            0 100%,
            100% 100%,
            100% 0%
          );
        }

        .link--effect span {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.2, 1, 0.8, 1);
        }

        .link--effect:hover span {
          transform: translate3d(0, -2px, 0);
        }
      `}</style>
    </Layout>
  );
}
