"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/lilzahs",
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
			</svg>
		),
	},
	{
		name: "X (Twitter)",
		href: "https://x.com/doandanh_zah",
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		),
	},
	{
		name: "Telegram",
		href: "https://t.me/doandanh_zah",
		icon: (
			<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
			</svg>
		),
	},
	{
		name: "Email",
		href: "mailto:doanzah2710@gmail.com",
		icon: (
			<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
			</svg>
		),
	},
];

export default function Hero() {
	const [isFlipped, setIsFlipped] = useState(false);
	const { t } = useLanguage();

	const handleImageHover = () => {
		setIsFlipped(true);
	};

	const handleImageLeave = () => {
		setIsFlipped(false);
	};

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
			{/* Background Effects */}
			<div className="absolute inset-0">
				{/* Gradient Orbs */}
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />

				{/* Grid Pattern */}
				<div
					className="absolute inset-0 opacity-10"
					style={{
						backgroundImage: `linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)`,
						backgroundSize: "100px 100px",
					}}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					{/* Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 3.5 }}
						className="flex-1 text-center lg:text-left"
					>
						{/* Greeting */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 3.7 }}
							className="text-accent-yellow font-mono text-sm md:text-base mb-4"
						>
							{t.hero.greeting}
						</motion.p>

						{/* Name */}
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 3.9 }}
							className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4"
						>
							<span className="text-pure-white">Đoàn Đỗ Thành Danh</span>
							<br />
							<span className="text-accent-yellow">(Zah)</span>
						</motion.h1>

						{/* Animated Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 4.1 }}
							className="text-xl md:text-2xl lg:text-3xl text-white/70 font-display mb-8"
						>
							<TypeAnimation
								sequence={[
									t.hero.roles[0],
									2000,
									t.hero.roles[1],
									2000,
									t.hero.roles[2],
									2000,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
								className="text-white/70"
							/>
							<span className="animate-pulse text-accent-yellow">|</span>
						</motion.div>

						{/* Social Links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 4.3 }}
							className="flex flex-wrap gap-4 justify-center lg:justify-start"
						>
							{socialLinks.map((link, index) => (
								<motion.a
									key={link.name}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 4.3 + index * 0.1 }}
									whileHover={{ scale: 1.05, y: -2 }}
									whileTap={{ scale: 0.95 }}
									className="pill-btn flex items-center gap-2 text-white/70 hover:text-accent-yellow"
								>
									{link.icon}
									<span className="hidden sm:inline">{link.name}</span>
								</motion.a>
							))}
						</motion.div>

						{/* CTA */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 4.5 }}
							className="mt-8"
						>
							<a
								href="#projects"
								className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-yellow to-accent-orange text-primary-black font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105"
							>
								{t.hero.viewWork}
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</a>
						</motion.div>
					</motion.div>

					{/* Profile Image with Flip Effect */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 3.7 }}
						className="flex-shrink-0"
					>
						<div
							className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 cursor-pointer"
							onMouseEnter={handleImageHover}
							onMouseLeave={handleImageLeave}
						>
							{/* Flip Container */}
							<div
								className="relative w-full h-full transition-all duration-700"
								style={{
									transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
									transformStyle: "preserve-3d",
								}}
							>
								{/* Front - Personal Photo */}
								<div
									className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent-yellow/50 yellow-glow"
									style={{ backfaceVisibility: "hidden" }}
								>
									<Image
										src="/assets/zah.jpg"
										alt="Zah - Đoàn Đỗ Thành Danh"
										fill
										className="object-cover"
										priority
									/>
									{/* Subtle gradient overlay */}
									<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
								</div>

								{/* Back - NFT Image */}
								<div
									className="absolute inset-0 rounded-full overflow-hidden border-4 border-accent-yellow yellow-glow"
									style={{
										backfaceVisibility: "hidden",
										transform: "rotateY(180deg)",
									}}
								>
									<Image
										src="/assets/zahnft.png"
										alt="Zah NFT"
										fill
										className="object-cover"
										priority
									/>
								</div>
							</div>

							{/* Decorative Rings */}
							<motion.div
								className="absolute -inset-4 border border-accent-yellow/20 rounded-full"
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: "linear",
								}}
							/>
							<motion.div
								className="absolute -inset-8 border border-accent-yellow/10 rounded-full"
								animate={{ rotate: -360 }}
								transition={{
									duration: 30,
									repeat: Infinity,
									ease: "linear",
								}}
							/>

							{/* Hover hint */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: isFlipped ? 0 : 1 }}
								className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs font-mono whitespace-nowrap"
							>
								hover for NFT
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 1.5, repeat: Infinity }}
					className="flex flex-col items-center text-white/50"
				>
					<span className="text-sm font-mono mb-2">Scroll Down</span>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</motion.div>
			</motion.div>
		</section>
	);
}
