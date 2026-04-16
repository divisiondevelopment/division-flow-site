export const pricingPlans = [
    {
        id: 1,
        name: "Starter",
        price: {
            monthly: 39,
            yearly: 290
        },
        description: "Ideal para freelancers que querem controle total das suas finanças pessoais",
        features: [
            { text: "Controle de receitas e despesas", highlighted: false },
            { text: "Conecte até 2 contas", highlighted: false },
            { text: "Relatórios mensais", highlighted: false },
            { text: "Alertas inteligentes", highlighted: false },
            { text: "3 projetos ativos", highlighted: false },
            { text: "Suporte da comunidade", highlighted: false }
        ],
        cta: {
            text: "Começar com Starter",
            href: "#"
        },
        popular: false
    },
    {
        id: 2,
        name: "Pro",
        price: {
            monthly: 69,
            yearly: 490
        },
        description: "Ferramentas avançadas para gerenciar melhor suas finanças e ter insights poderosos",
        features: [
            { text: "Contas ilimitadas", highlighted: true },
            { text: "Insights de gastos com IA", highlighted: true },
            { text: "Alertas personalizados", highlighted: true },
            { text: "Relatórios avançados", highlighted: true },
            { text: "Projetos ilimitados", highlighted: true },
            { text: "Suporte prioritário 24/7", highlighted: true }
        ],
        cta: {
            text: "Começar com Pro",
            href: "#"
        },
        popular: true,
        badge: "POPULAR",
        yearlyDiscount: "2 meses grátis"
    }
];

export const trustedCompanies = {
    title: "Confiado por times do mundo todo",
    description: "Convide seu time, sincronize contas em tempo real e acompanhe metas compartilhadas",
    cta: {
        text: "Falar com Vendas",
        href: "#"
    }
};

