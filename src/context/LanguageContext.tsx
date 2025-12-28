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
      roles: ["Solana Buidler", "Blockchain Developer", "Web3 Enthusiast"],
      viewWork: "View My Work",
    },
    about: {
      label: "// About Me",
      title: "Who Am I?",
      bio1: "Passionate about building decentralized applications on Solana. Currently studying at DUT while leading the Superteam community and creating innovative Web3 solutions.",
      bio2: "I believe in the power of blockchain technology to revolutionize how we interact with digital systems. My goal is to contribute to the Solana ecosystem by building tools and applications that push the boundaries of what's possible in Web3.",
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
          role: "Computer Science Student",
          description: "Studying Computer Science while actively participating in blockchain development and Web3 communities.",
        },
        dsuc: {
          role: "Community Leader",
          description: "Founded and leading the first Solana-focused student club at DUT, organizing workshops, hackathons, and educational events.",
        },
        gmi: {
          role: "Project Lead",
          description: "Created an innovative platform to help people brainstorm and develop their Web3 project ideas.",
        },
        superteam: {
          role: "Community Contributor",
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
          description: "Received a grant to support the development of Web3 projects and community initiatives in Da Nang.",
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
        easter: "🎮 Try the Konami Code for a surprise!",
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
      roles: ["Solana Buidler", "Blockchain Developer", "Web3 Enthusiast"],
      viewWork: "Xem dự án",
    },
    about: {
      label: "// Về tôi",
      title: "Tôi là ai?",
      bio1: "Đam mê xây dựng các ứng dụng phi tập trung trên Solana. Hiện đang học tại ĐH Bách Khoa Đà Nẵng (DUT), đồng thời dẫn dắt cộng đồng Superteam và tạo ra các giải pháp Web3 sáng tạo.",
      bio2: "Tôi tin vào sức mạnh của công nghệ blockchain trong việc thay đổi cách chúng ta tương tác với các hệ thống số. Mục tiêu của tôi là đóng góp cho hệ sinh thái Solana bằng cách xây dựng các công cụ và ứng dụng vượt qua giới hạn của Web3.",
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
          role: "Sinh viên CNTT",
          description: "Đang học Công nghệ thông tin và tích cực tham gia phát triển blockchain và cộng đồng Web3.",
        },
        dsuc: {
          role: "Trưởng cộng đồng",
          description: "Sáng lập và dẫn dắt câu lạc bộ sinh viên đầu tiên tập trung vào Solana tại DUT, tổ chức workshop, hackathon và các sự kiện giáo dục.",
        },
        gmi: {
          role: "Trưởng dự án",
          description: "Tạo ra nền tảng sáng tạo giúp mọi người brainstorm và phát triển ý tưởng dự án Web3.",
        },
        superteam: {
          role: "Thành viên đóng góp",
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
          description: "Nhận tài trợ để hỗ trợ phát triển các dự án Web3 và sáng kiến cộng đồng tại Đà Nẵng.",
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
        easter: "🎮 Thử Konami Code để có bất ngờ!",
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
