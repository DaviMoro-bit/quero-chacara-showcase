import { useState } from "react";
import { Play, Clock3, Camera, MessageCircle } from "lucide-react";
import videoAsset from "@/assets/video-espaco-gold.mp4.asset.json";
import posterImage from "@/assets/hero-chacara.jpg";
import Reveal from "./Reveal";

// Troque apenas a linha abaixo para publicar o vídeo real do espaço.
const videoSrc = (videoAsset as { url: string }).url;

const ListingVideo = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="video"
      className="relative scroll-mt-28 overflow-hidden bg-secondary py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative container mx-auto px-4">
        <Reveal className="mb-8 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            <Camera className="h-3.5 w-3.5" />
            Vídeo do espaço
          </span>
          <h2 className="font-heading mt-4 text-3xl font-bold text-foreground md:text-4xl">
            Sinta o ambiente antes de chegar
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Um passeio pelo espaço: piscina, deck, área gourmet e o salão
            iluminado no fim de tarde. É exatamente assim que o seu evento vai
            começar.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="group relative aspect-video overflow-hidden rounded-2xl bg-foreground shadow-large ring-1 ring-foreground/10">
            {playing ? (
              <video
                src={videoSrc}
                autoPlay
                controls
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <img
                  src={posterImage}
                  alt="Vista do Espaço Gold Eventos ao entardecer"
                  className="h-full w-full animate-ken-burns object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />

                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Assistir ao vídeo do espaço"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-background/95 shadow-large ring-8 ring-background/20 transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-7 w-7 translate-x-0.5 fill-primary text-primary" />
                  </span>
                </button>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
                  <div>
                    <p className="font-heading text-lg font-semibold text-background md:text-xl">
                      Espaço Gold Eventos · Tour
                    </p>
                    <p className="text-sm text-background/70">
                      Piscina · Área gourmet · Salão
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground/60 px-3 py-1 text-xs font-medium text-background backdrop-blur-sm">
                    <Clock3 className="h-3.5 w-3.5" />
                    0:06
                  </span>
                </div>
              </>
            )}
          </div>
        </Reveal>

        <Reveal
          delay={200}
          className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
        >
          <span>
            O vídeo abre sem som automático — ative quando quiser.
          </span>
          <a
            href="#video"
            className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary-hover"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir um tour particular pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default ListingVideo;
