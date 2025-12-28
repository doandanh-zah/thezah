"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "vi";

interface Translations {
  nav: {
    about: string;
    timeline: string;
    achievements: string;
    tech: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    viewWork: string;
  };
  about: {
    label: string;
    title: string;
    bio1: string;
    bio2: string;
    stats: {
      projects: string;
      years: string;
      members: string;
      hackathons: string;
    };
  };
  timeline: {
    label: string;
    title: string;
    items: {
      dut: {
        role: string;
        description: string;
      };
      dsuc: {
        role: string;
        description: string;
      };
      gmi: {
        role: string;
        description: string;
      };
      superteam: {
        role: string;
        description: string;
      };
    };
  };
  achievements: {
    label: string;
    title: string;
    items: {
      hackathon: {
        event: string;
        description: string;
      };
      grant: {
        event: string;
        description: string;
      };
    };
    more: string;
  };
  tech: {
    label: string;
    title: string;
    also: string;
  };
  projects: {
    label: string;
    title: string;
    viewAll: string;
    code: string;
    live: string;
    items: {
      dsuc: string;
      gmi: string;
      nft: string;
      wallet: string;
    };
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    cta: string;
    footer: {
      built: string;
      rights: string;
      easter: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      timeline: "Timeline",
      achievements: "Achievements",
      tech: "Tech",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "// Hello, I'm",
      roles: ["Solana BUIDLER", "Community Builder", "Blockchain Developer"],
      viewWork: "View My Work",
    },
    about: {
      label: "// About Me",
      title: "Who Am I?",
      bio1: "I'm a Mechanical Manufacturing Engineering student at Da Nang University of Science and Technology (DUT), passionate about blockchain and its real-world applications. My goal is to bridge engineering and blockchain technology.",
      bio2: "I lead the DUT Superteam University Club (DSUC) under SuperteamVN, focusing on blockchain education within the Solana ecosystem. I'm also building Gimme Idea — a platform helping builders validate ideas through AI feedback and community insights.",
      stats: {
        projects: "Projects Built",
        years: "Years in Web3",
        members: "Community Members",
        hackathons: "Hackathons",
      },
    },
    timeline: {
      label: "// My Journey",
      title: "Timeline",
      items: {
        dut: {
          role: "Student",
          description: "Studying Mechanical Manufacturing Engineering while actively participating in blockchain development and Web3 communities.",
        },
        dsuc: {
          role: "President",
          description: "Founded and leading the first Solana-focused student club at DUT, organizing workshops, hackathons, and educational events.",
        },
        gmi: {
          role: "Founder",
          description: "Created an innovative platform to help people brainstorm and develop their Web3 project ideas.",
        },
        superteam: {
          role: "Member",
          description: "Active member of Vietnam's premier Solana community, contributing to ecosystem growth and developer education.",
        },
      },
    },
    achievements: {
      label: "// Recognition",
      title: "Achievements",
      items: {
        hackathon: {
          event: "Hackathon Achievement",
          description: "Achieved second place in the APEC Education Ecosystem track, building innovative solutions on Solana blockchain.",
        },
        grant: {
          event: "Grant Award",
          description: "Received a grant to organize sports activities and connect the Solana community in Da Nang.",
        },
      },
      more: "More achievements coming soon...",
    },
    tech: {
      label: "// Technologies",
      title: "Tech Stack",
      also: "Also familiar with:",
    },
    projects: {
      label: "// My Work",
      title: "Featured Projects",
      viewAll: "View All Projects on GitHub",
      code: "Code",
      live: "Live Demo",
      items: {
        dsuc: "A comprehensive platform for the DUT Superteam University Club, featuring member management, event tracking, and educational resources for Solana developers.",
        gmi: "An innovative platform that helps entrepreneurs and developers brainstorm Web3 project ideas using AI-powered suggestions and community feedback.",
        nft: "A decentralized NFT marketplace built on Solana, featuring fast transactions, low fees, and seamless wallet integration with Phantom.",
        wallet: "A portfolio tracking application for Solana wallets, displaying token balances, NFT collections, and transaction history in real-time.",
      },
    },
    contact: {
      label: "// Get In Touch",
      title: "Let's Build Together",
      subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and create something amazing!",
      cta: "Say Hello!",
      footer: {
        built: "Designed & Built by",
        rights: "All rights reserved.",
        easter: "",
      },
    },
  },
  vi: {
    nav: {
      about: "Giới thiệu",
      timeline: "Hành trình",
      achievements: "Thành tựu",
      tech: "Công nghệ",
      projects: "Dự án",
      contact: "Liên hệ",
    },
    hero: {
      greeting: "// Xin chào, tôi là",
      roles: ["Solana BUIDLER", "Community Builder", "Blockchain Developer"],
      viewWork: "Xem dự án",
    },
    about: {
      label: "// Về tôi",
      title: "Tôi là ai?",
      bio1: "Tôi là sinh viên ngành Công nghệ Chế tạo máy tại Trường Đại học Bách khoa - Đại học Đà Nẵng (DUT), đam mê blockchain và các ứng dụng thực tế của nó. Mục tiêu của tôi là kết nối kỹ thuật cơ khí với công nghệ blockchain.",
      bio2: "Tôi đang dẫn dắt DUT Superteam University Club (DSUC) thuộc SuperteamVN, tập trung vào giáo dục blockchain trong hệ sinh thái Solana. Tôi cũng đang xây dựng Gimme Idea — nền tảng giúp các builder xác thực ý tưởng qua phản hồi AI và insights từ cộng đồng.",
      stats: {
        projects: "Dự án đã xây dựng",
        years: "Năm trong Web3",
        members: "Thành viên cộng đồng",
        hackathons: "Hackathons",
      },
    },
    timeline: {
      label: "// Hành trình của tôi",
      title: "Dòng thời gian",
      items: {
        dut: {
          role: "Sinh viên",
          description: "Đang học ngành Công nghệ Chế tạo máy và tích cực tham gia phát triển blockchain và cộng đồng Web3.",
        },
        dsuc: {
          role: "Chủ nhiệm",
          description: "Sáng lập và dẫn dắt câu lạc bộ sinh viên đầu tiên tập trung vào Solana tại DUT, tổ chức workshop, hackathon và các sự kiện giáo dục.",
        },
        gmi: {
          role: "Người sáng lập",
          description: "Tạo ra nền tảng sáng tạo giúp mọi người brainstorm và phát triển ý tưởng dự án Web3.",
        },
        superteam: {
          role: "Thành viên",
          description: "Thành viên tích cực của cộng đồng Solana hàng đầu Việt Nam, đóng góp cho sự phát triển hệ sinh thái và giáo dục lập trình viên.",
        },
      },
    },
    achievements: {
      label: "// Ghi nhận",
      title: "Thành tựu",
      items: {
        hackathon: {
          event: "Hackathon",
          description: "Đạt giải nhì tại track APEC Education Ecosystem, xây dựng các giải pháp sáng tạo trên blockchain Solana.",
        },
        grant: {
          event: "Grant",
          description: "Nhận tài trợ để tổ chức các hoạt động thể thao, kết nối cộng đồng Solana tại Đà Nẵng.",
        },
      },
      more: "Nhiều thành tựu khác sắp tới...",
    },
    tech: {
      label: "// Công nghệ",
      title: "Tech Stack",
      also: "Cũng quen thuộc với:",
    },
    projects: {
      label: "// Dự án",
      title: "Dự án nổi bật",
      viewAll: "Xem tất cả dự án trên GitHub",
      code: "Code",
      live: "Demo",
      items: {
        dsuc: "Nền tảng toàn diện cho Câu lạc bộ Superteam DUT, bao gồm quản lý thành viên, theo dõi sự kiện và tài nguyên giáo dục cho các lập trình viên Solana.",
        gmi: "Nền tảng sáng tạo giúp doanh nhân và lập trình viên brainstorm ý tưởng dự án Web3 bằng gợi ý AI và phản hồi từ cộng đồng.",
        nft: "Chợ NFT phi tập trung xây dựng trên Solana, với giao dịch nhanh, phí thấp và tích hợp ví Phantom mượt mà.",
        wallet: "Ứng dụng theo dõi portfolio cho ví Solana, hiển thị số dư token, bộ sưu tập NFT và lịch sử giao dịch theo thời gian thực.",
      },
    },
    contact: {
      label: "// Liên hệ",
      title: "Hãy cùng xây dựng",
      subtitle: "Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo, hoặc cơ hội hợp tác. Hãy kết nối và cùng tạo ra điều tuyệt vời!",
      cta: "Gửi lời chào!",
      footer: {
        built: "Thiết kế & Xây dựng bởi",
        rights: "Bản quyền thuộc về.",
        easter: "",
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "vi")) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
