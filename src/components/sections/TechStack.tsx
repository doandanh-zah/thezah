"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/context/LanguageContext";

const techCategories = [
	{
		title: "Solana / Web3",
		techs: [
			{ name: "Solana", icon: "◎" },
			{ name: "Anchor", icon: "⚓" },
			{ name: "Rust", icon: "🦀" },
		],
	},
	{
		title: "Frontend",
		techs: [
			{ name: "Next.js", icon: "▲" },
			{ name: "React", icon: "⚛️" },
			{ name: "TypeScript", icon: "TS" },
			{ name: "TailwindCSS", icon: "🎨" },
			{ name: "Vite", icon: "⚡" },
		],
	},
	{
		title: "Backend",
		techs: [
			{ name: "Node.js", icon: "🟢" },
			{ name: "Express", icon: "🚂" },
			{ name: "PostgreSQL", icon: "🐘" },
		],
	},
	{
		title: "Tools",
		techs: [
			{ name: "Git", icon: "📦" },
			{ name: "Vercel", icon: "▲" },
			{ name: "Figma", icon: "🎨" },
			{ name: "Railway", icon: "🚃" },
			{ name: "Linux CLI", icon: "🐧" },
			{ name: "Render", icon: "🔷" },
			{ name: "Digital Ocean", icon: "🌊" },
		],
	},
];

export default function TechStack() {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	const { t } = useLanguage();

	return (
		<section id="tech" className="py-24 md:py-32 relative overflow-hidden">
			{/* Background */}
			<div className="absolute inset-0">
				<div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
			</div>

			<div ref={ref} className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<p className="text-accent-yellow font-mono text-sm mb-4">{t.tech.label}</p>
					<h2 className="section-title">{t.tech.title}</h2>
				</motion.div>

				{/* Tech Categories */}
				<div className="grid md:grid-cols-2 gap-8">
					{techCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
							className="p-6 rounded-2xl bg-secondary-black/30 backdrop-blur-md border border-white/5"
						>
							{/* Category Title */}
							<h3 className="text-lg font-bold font-display text-accent-yellow mb-6 flex items-center gap-2">
								<span className="w-2 h-2 bg-accent-yellow rounded-full" />
								{category.title}
							</h3>

							{/* Tech Grid */}
							<div className="grid grid-cols-2 gap-4">
								{category.techs.map((tech, techIndex) => (
									<motion.div
										key={tech.name}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={inView ? { opacity: 1, scale: 1 } : {}}
										transition={{
											duration: 0.4,
											delay: categoryIndex * 0.15 + techIndex * 0.1,
										}}
										whileHover={{ scale: 1.05, y: -5 }}
										className="tech-card flex items-center gap-3 group"
									>
										<span className="text-2xl group-hover:scale-110 transition-transform">
											{tech.icon}
										</span>
										<span className="font-medium text-white/80 group-hover:text-white transition-colors">
											{tech.name}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Additional Skills */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={inView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.8 }}
					className="mt-12 text-center"
				>
					<p className="text-white/50 font-mono text-sm mb-4">{t.tech.also}</p>
					<div className="flex flex-wrap justify-center gap-3">
						{["Docker", "GraphQL", "Web3.js", "Solidity", "Helius RPC", "Lazorkit SDK", "Wallet Adapters"].map(
							(skill, index) => (
								<motion.span
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{ delay: 0.9 + index * 0.05 }}
									whileHover={{ scale: 1.1, y: -2 }}
									className="px-4 py-2 text-sm text-white/60 bg-secondary-black/50 rounded-full border border-white/5 hover:border-accent-yellow/30 hover:text-accent-yellow transition-all cursor-default"
								>
									{skill}
								</motion.span>
							)
						)}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
