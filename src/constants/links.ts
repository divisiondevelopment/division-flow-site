import { Routes } from "./routes";

export const NAV_LINKS = [
    {
        label: "Diferença",
        href: Routes.Difference,
    },
    {
        label: "Workflow",
        href: Routes.Workflow,
    },
    {
        label: "Funcionalidades",
        href: Routes.Capabilities,
    },
    {
        label: "Integrações",
        href: Routes.Integrations,
    },
    {
        label: "Planos",
        href: Routes.Membership,
    },
] as const;

export const footerLinks = {
    product: [
        { label: "Funcionalidades", href: "#capabilities" },
        { label: "Integrações", href: "#integrations" },
        { label: "Preços", href: "#membership" },
        { label: "Changelog", href: "#" }
    ],
    resources: [
        { label: "Docs", href: "#" },
        { label: "API", href: "#" },
        { label: "Suporte", href: "#" },
        { label: "Status", href: "#" }
    ],
    company: [
        { label: "Sobre", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Carreiras", href: "#" },
        { label: "Contato", href: "#" }
    ]
};

export const socialLinks = [
    { label: "X", href: "https://x.com", icon: "x" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" }
];
