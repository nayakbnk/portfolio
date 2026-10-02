import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface ContactProps {
  onPlaceholderClick?: (type: string, name: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [copied, setCopied] = useState(false);


  // Email placeholder per Section 15 & Content Rule
  const emailAddress = 'bhagyashreen192@gmail.com'; // Standard placeholder

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-16 sm:py-24 border-t-[3px] border-[#111111] dark:border-[#FFFFFF] bg-[#F5F0E8] dark:bg-[#121214] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block bg-[#FF6B6B] text-[#FFFFFF] font-black text-xs sm:text-sm px-3.5 py-1 border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] mb-3 uppercase tracking-widest -rotate-1">
            GET IN TOUCH
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-tight">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="mt-4 text-base sm:text-xl font-medium text-[#111111]/90 dark:text-[#F5F0E8]/90 leading-relaxed">
            Have an idea, opportunity or interesting problem? Let's talk.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="flex justify-center">

          {/* Contact Cards */}
          <div className="w-full max-w-2xl space-y-4">

            {/* Email Card with Copy Feature */}
            <div className="bg-[#FFFFFF] dark:bg-[#1B1B20] border-[3px] border-[#111111] dark:border-[#FFFFFF] p-6 shadow-[6px_6px_0px_#111111] dark:shadow-[6px_6px_0px_#000000] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 bg-[#FFD84D] text-[#111111] border-2 border-[#111111] shadow-[2px_2px_0px_#111111]">
                      <Mail className="w-5 h-5 stroke-[2.5]" />
                    </span>
                    <h3 className="font-display font-black text-xl text-[#111111] dark:text-[#F5F0E8] uppercase tracking-wide">
                      EMAIL
                    </h3>
                  </div>

                </div>

                <p className="text-sm text-[#111111]/80 dark:text-[#F5F0E8]/80 font-medium mb-3">
                  Drop me an email for any inquiries.
                </p>

                <div className="bg-[#F5F0E8] dark:bg-[#141418] border-2 border-[#111111] dark:border-[#FFFFFF]/40 p-3 font-mono text-xs sm:text-sm font-bold text-[#111111] dark:text-[#F5F0E8] break-all mb-4 select-all">
                  {emailAddress}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#FFD84D] text-[#111111] font-black text-xs uppercase tracking-wider border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#111111] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3] text-[#111111]" />
                      <span>COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 stroke-[2.5]" />
                      <span>COPY EMAIL ADDRESS</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center justify-center p-2.5 bg-[#FFFFFF] dark:bg-[#1E1E24] text-[#111111] dark:text-[#F5F0E8] border-2 border-[#111111] dark:border-[#FFFFFF] shadow-[2px_2px_0px_#111111] dark:shadow-[2px_2px_0px_#000000] hover:bg-[#A7E86B] dark:hover:bg-[#A7E86B] dark:hover:text-[#111111] transition-all"
                  title="Open Default Mail App"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* GitHub Card */}
              <a
                href="https://github.com/nayakbnk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] border-[3px] border-[#111111] dark:border-[#FFFFFF] p-5 shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000] hover:bg-[#6EA8FE] dark:hover:bg-[#6EA8FE] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111111] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-[#111111] dark:bg-[#000000] text-[#FFFFFF] border-2 border-[#111111] dark:border-[#FFFFFF]">
                      <GithubIcon className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="font-display font-black text-lg uppercase tracking-wide">
                    GITHUB
                  </h4>
                  <p className="text-xs opacity-80 font-mono mt-1">
                    @nayakbnk
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-mono font-bold">
                  CHECK REPOSITORIES →
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="http://linkedin.com/in/bhagyashree-nayak-k-501860300"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFFFFF] dark:bg-[#1B1B20] text-[#111111] dark:text-[#F5F0E8] border-[3px] border-[#111111] dark:border-[#FFFFFF] p-5 shadow-[4px_4px_0px_#111111] dark:shadow-[4px_4px_0px_#000000] hover:bg-[#A7E86B] dark:hover:bg-[#A7E86B] dark:hover:text-[#111111] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#111111] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="p-2 bg-[#111111] dark:bg-[#000000] text-[#FFFFFF] border-2 border-[#111111] dark:border-[#FFFFFF]">
                      <LinkedinIcon className="w-5 h-5" />
                    </span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="font-display font-black text-lg uppercase tracking-wide">
                    LINKEDIN
                  </h4>
                  <p className="text-xs opacity-80 font-mono mt-1">
                    in/bhagyashreenayakk
                  </p>
                </div>
                <div className="mt-3 text-[11px] font-mono font-bold">
                  CONNECT PROFESSIONALLY →
                </div>
              </a>

            </div>

          </div>



        </div>

      </div>
    </section>
  );
};
