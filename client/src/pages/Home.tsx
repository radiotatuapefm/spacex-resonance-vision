import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Waves, Rocket, Target, Users, Github, Linkedin, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold text-primary">Resonance Vision</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#physics" className="text-sm hover:text-accent transition-colors">Physics</a>
            <a href="#technology" className="text-sm hover:text-accent transition-colors">Technology</a>
            <a href="#applications" className="text-sm hover:text-accent transition-colors">Applications</a>
            <a href="#team" className="text-sm hover:text-accent transition-colors">Team</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                ✨ Advanced Propulsion Technology
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                The Future of Propulsion: Vibro-Resonant Technology
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Elegant, efficient, and physics-grounded propulsion systems that harness the fundamental principles of resonance. A vision for next-generation spacecraft by Julio Cesar Campos Machado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Explore the Vision <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/jXwMItclj098gxWU3V8yQs/sandbox/4lcrqXabA2jdDHEgwGaUcP-img-1_1770339181000_na1fn_aGVyby1yZXNvbmFuY2UtY2hhbWJlcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvalh3TUl0Y2xqMDk4Z3hXVTNWOHlRcy9zYW5kYm94LzRsY3JxWGFiQTJqZERIRWd3R2FVY1AtaW1nLTFfMTc3MDMzOTE4MTAwMF9uYTFmbl9hR1Z5YnkxeVpYTnZibUZ1WTJVdFkyaGhiV0psY2cucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=FxO4NPGIKICInnjEnNtG1fU3HZceCO2V8c09A6mFcR5LDIsoGhcZ7XIgN-nUbSrkRWxlmqh2a8EYq5TIXLErKxs7bvRlfiL17HOkzhTG8-TpZwB7kVwfu6eh7CMz1H3yNgFwB0narE7WXzF0IbAnE9k~mwIG4pvP0IpyAjEBVASkUBw6SAZGFND-vqET72DVlm49qGNHctn9UxX2-jc5-ZWueIUL8tIzTWDeK~UqFO5582~~zFCe1FIZTbpkq4ZeSINt5sFzoo7F9-0fTwNB4xNJ7Hu93hHGQCjqa9Mj7PQIpTcWLe4Vk4ct0m96tYmfAySGTvT~OxDbb4sU8IMgjQ__"
                alt="Vibro-Resonant Propulsion Chamber"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Physics Foundation */}
      <section id="physics" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Rigorous Physics: From Theory to Application</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the fundamental principles that make vibro-resonant propulsion possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Challenge</h3>
              <p className="text-muted-foreground">
                To levitate or propel any object against Earth's gravitational pull requires a fundamental force of 98.1 newtons for a 10kg payload. This is not negotiable—it is a law of physics.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">What Resonance Is</h3>
              <p className="text-muted-foreground">
                Resonance is not a source of energy. It is a dynamic regime where systems respond with maximum amplitude at their natural frequency, amplifying response without creating force from nothing.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">The Thrust Equation</h3>
              <p className="text-muted-foreground">
                All propulsion systems obey F = ṁ × v. The elegance lies not in escaping this law, but in optimizing it through organized, coherent energy transfer.
              </p>
            </Card>
          </div>

          <div className="bg-background rounded-lg p-8 md:p-12 border border-border">
            <h3 className="text-2xl font-bold mb-6">The Fundamental Equation</h3>
            <div className="flex justify-center mb-8">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/jXwMItclj098gxWU3V8yQs/sandbox/4lcrqXabA2jdDHEgwGaUcP-img-4_1770339170000_na1fn_cGh5c2ljcy1kaWFncmFtLXRocnVzdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvalh3TUl0Y2xqMDk4Z3hXVTNWOHlRcy9zYW5kYm94LzRsY3JxWGFiQTJqZERIRWd3R2FVY1AtaW1nLTRfMTc3MDMzOTE3MDAwMF9uYTFmbl9jR2g1YzJsamN5MWthV0ZuY21GdExYUm9jblZ6ZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lTiNuaXYzTjbXqBzWrA4N6IJhkTkYRecXs3HvjtBUoBHQseZ6HGsNePJQi~wIQlPMNV8YSgO8N8oAyLS7IThSFDxyBxyqOWs0AjQGptTzqmWdr~ek~CnFL8d5nj5HkMPl0H6YfzfKn5sBJcRqXl95IZThpUenrnD~N~hdPkPpZPBFdCCt12VBBixOboIPDuq-iAit14tRVb-vja-08am13xEs3CEkHmnzcvjl1NESMfyX8dZ4NFV4xJnW-frH0IDk~CpRAAoJT~2b4~hlxsLyNh9cZhUvELGrfbBBD3liG5h0XalsLEwkRaI7aBBH7ROVXqWd9GozOA3U824RKxmgA__"
                alt="Thrust Equation F = m × v"
                className="max-w-md mx-auto"
              />
            </div>
            <p className="text-center text-muted-foreground">
              Where F is thrust force, ṁ is mass flow rate, and v is exhaust velocity. This equation is fundamental to all propulsion systems.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture: Elegance Through Physics</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How vibro-resonant propulsion works and why it represents a new paradigm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Core Components</h3>
              <div className="space-y-4">
                {[
                  { title: "Resonance Chamber", desc: "Specially-shaped cavity designed to oscillate at specific frequencies" },
                  { title: "Piezoelectric Actuators", desc: "Convert electrical signals into precise mechanical vibrations" },
                  { title: "Standing Wave Formation", desc: "Acoustic waves creating organized pressure patterns" },
                  { title: "Electronic Control System", desc: "Real-time frequency modulation and amplitude adjustment" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/jXwMItclj098gxWU3V8yQs/sandbox/4lcrqXabA2jdDHEgwGaUcP-img-2_1770339179000_na1fn_YWNvdXN0aWMtd2F2ZXMtdmlzdWFsaXphdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvalh3TUl0Y2xqMDk4Z3hXVTNWOHlRcy9zYW5kYm94LzRsY3JxWGFiQTJqZERIRWd3R2FVY1AtaW1nLTJfMTc3MDMzOTE3OTAwMF9uYTFmbl9ZV052ZFhOMGFXTXRkMkYyWlhNdGRtbHpkV0ZzYVhwaGRHbHZiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Mm87LlHp2ky491ks1m9377mL0X58qOcDkBNoA50cRYCjVVaHRe-mnwjIF6hgXGYN~gnsApi0-3O0-ng8Iuly1AA-9w-Wz3yAcDXxsTUd47qsg1OR67lbNlX3xI-3kCOxFa~KT83m2tFEhygCayFqQcP66nNRj5arLgRpcNR0wv~WjAwkFvIj05920MAPvscWTrXFVvLGJxKAIvEukoC2SO9QO6ysbxD1~if43IJ1gTDjB1cJUOg47-0Py2UQHLWZKoN5cDd9ayDw6zggqq36qG8WGxCjeWjavdxs~U3WSDkJapxw4W9UK1PKv-KPDfrgAMapt2LMA6b4fmUEQLv~zQ__"
                alt="Acoustic Standing Waves Visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-background rounded-lg p-8 md:p-12 border border-border mb-16">
            <h3 className="text-2xl font-bold mb-6">Comparison with Traditional Systems</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Characteristic</th>
                    <th className="text-left py-3 px-4 font-semibold">Traditional Rocket</th>
                    <th className="text-left py-3 px-4 font-semibold">Vibro-Resonant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { char: "Noise Level", trad: "180+ dB", vib: "<150 dB" },
                    { char: "Efficiency", trad: "60-70%", vib: "80-90%+" },
                    { char: "Vibration", trad: "Extreme", vib: "Controlled" },
                    { char: "Scalability", trad: "Limited", vib: "Modular" },
                    { char: "Control", trad: "Discrete", vib: "Continuous" },
                    { char: "Fuel Type", trad: "Chemical", vib: "Electrical" },
                    { char: "Emissions", trad: "Combustion", vib: "Zero" },
                    { char: "Startup Time", trad: "Seconds", vib: "<100ms" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium">{row.char}</td>
                      <td className="py-3 px-4 text-muted-foreground">{row.trad}</td>
                      <td className="py-3 px-4 text-accent font-medium">{row.vib}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/jXwMItclj098gxWU3V8yQs/sandbox/4lcrqXabA2jdDHEgwGaUcP-img-3_1770339172000_na1fn_c3BhY2V4LXJlc29uYW5jZS1jb25jZXB0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvalh3TUl0Y2xqMDk4Z3hXVTNWOHlRcy9zYW5kYm94LzRsY3JxWGFiQTJqZERIRWd3R2FVY1AtaW1nLTNfMTc3MDMzOTE3MjAwMF9uYTFmbl9jM0JoWTJWNExYSmxjMjl1WVc1alpTMWpiMjVqWlhCMC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GEPbuei8PTs1noF9pGDt3hDvt0BjlOeuwNpRDXPtvtkGqzC-EIeTEYr-CsRlprWTNANHon3aiOEm7ezlNbbouXuSNiznIDRfqYVCqRFoYh65nKlkKRQ20UjwzDBi-qx-O3uSbRKSQkp~JNGR8m64M5LEeoHlmig-9BAh7HlYaadTkrynYUAuYwqZfUYU-qyG-JMTxnsoEXb1p7u~CuywXfdQ0oEoxh67zZMT52IYiB4MRiej28~Kg2-eGqz7uNCOyaeiAG0ApfWRG3K7oY7WSqUGql4xku3nUrh7XsmWdCnTGRSw1Z~rZm7MIoD1XnKTvr49Gm2T0S5bBD1jo1i0eA__"
                alt="SpaceX Resonance Concept"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Applications for SpaceX</h3>
              <div className="space-y-4">
                {[
                  "Orbital maneuvering and station-keeping",
                  "Precise attitude control systems",
                  "Gentle, controlled descent for delicate payloads",
                  "Fine-grained thrust control for rendezvous operations",
                  "Lunar and Mars landing systems",
                  "Contactless payload handling in space"
                ].map((app, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-muted-foreground">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Propulsion Systems Comparison</h2>
            <p className="text-lg text-muted-foreground">Interactive animation showing different propulsion approaches in action</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-xl bg-black">
              <video 
                width="100%" 
                height="auto" 
                controls
                autoPlay
                muted
                loop
                className="w-full"
              >
                <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028985193/ggBfSaOIrJYjJvVh.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Visionary</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Julio Cesar Campos Machado: Theoretical Physicist and Innovator
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Julio Cesar Campos Machado</h3>
                <p className="text-muted-foreground mb-6">
                  Theoretical Physicist & Programmer at Like Look Solutions. With deep expertise in physics simulation, computational modeling, and advanced engineering concepts, Julio has developed a rigorous mathematical framework for vibro-resonant propulsion systems.
                </p>
                <div className="space-y-3">
                  <p className="text-sm"><strong>Expertise:</strong> Theoretical Physics, Computational Modeling, Advanced Engineering</p>
                  <p className="text-sm"><strong>Vision:</strong> Bridging the gap between theoretical physics and practical engineering applications</p>
                  <p className="text-sm"><strong>Approach:</strong> Rigorous, honest, innovative, and elegant solutions</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold">Connect & Collaborate</h4>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.linkedin.com/in/juliocamposmachado/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href="https://github.com/juliocamposmachado" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Website
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-background to-card border-accent/20">
              <h3 className="text-xl font-bold mb-6">Like Look Solutions</h3>
              <p className="text-muted-foreground mb-6">
                A technology company dedicated to developing innovative solutions at the intersection of physics, engineering, and software.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Specializations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Advanced simulation and modeling</li>
                    <li>• Physics-based engineering concepts</li>
                    <li>• Computational solutions</li>
                    <li>• Academic-to-practical translation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact</h4>
                  <p className="text-sm text-muted-foreground">
                    Phone: +55 11 99294-6628 / +55 11 97060-3441
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-accent/10 border-t border-border">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in advancing next-generation propulsion technology. Whether you're a researcher, engineer, or industry leader, there's a place for you in this vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More About the Technology
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Waves className="w-6 h-6 text-accent" />
                <span className="font-bold">Resonance Vision</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Advancing propulsion technology through physics and innovation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Physics Foundation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">System Architecture</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Applications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Research Papers</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://www.linkedin.com/in/juliocamposmachado/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/juliocamposmachado" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="https://likelook.wixsite.com/solutions" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Website</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Resonance Vision. All rights reserved. | Visionary: Julio Cesar Campos Machado | Company: Like Look Solutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
