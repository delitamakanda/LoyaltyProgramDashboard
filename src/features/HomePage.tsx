import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    IconGift,
    IconChartBar,
    IconHeadphones,
    IconCheck,
    IconPlug
} from '@tabler/icons-react'
import {useTranslation} from "react-i18next";
import {formatCurrency} from "@/helpers";
import {useState} from "react";

const faqDatas = [
    {
        question: 'faq.question1',
        answer: 'faq.answer1'
    },
    {
        question: 'faq.question2',
        answer: 'faq.answer2'
    },
    {
        question: 'faq.question3',
        answer: 'faq.answer3'
    },
    {
        question: 'faq.question4',
        answer: 'faq.answer4'
    }
];

// make enum
const Pricing = {
    FREE: 'FREE',
    PRO: 'PRO',
    ENTERPRISE: 'ENTERPRISE'
}

const HomePage = () => {
    const { t } = useTranslation()
    const [selectedPricing, setSelectedPricing] = useState(Pricing.PRO)

    const handlePricingChange = (pricing: string) => {
        setSelectedPricing(pricing)
    }
    return(
        <div>
            {/* Hero section */}
            <section className="text-center py-20 px-6">
                <h2 className="text-4xl font-bold mb-4">{t('hero.title')}</h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                    {t('hero.subtitle')}
                </p>
                <Button size="lg">{t('hero.action')}</Button>
            </section>

            {/* Features */}
            <section id="features" className="py-16 bg-gray-50 dark:bg-black px-6">
                <h3 className="text-3xl font-semibold text-center mb-12">{t('features.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <IconPlug className="w-8 h-8 text-blue-600 mb-4" />
                            <h4 className="text-lg font-medium mb-2">{t('features.feature1')}</h4>
                            <p className="text-sm text-muted-foreground">
                                {t('features.feature2')}</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <IconGift className="w-8 h-8 text-blue-600 mb-4" />
                            <h4 className="text-lg font-medium mb-2">{t('features.feature3')}</h4>
                            <p className="text-sm text-muted-foreground">
                                {t('features.feature4')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <IconChartBar className="w-8 h-8 text-blue-600 mb-4" />
                            <h4 className="text-lg font-medium mb-2">{t('features.feature7')}</h4>
                            <p className="text-sm text-muted-foreground">
                                {t('features.feature5')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="flex flex-col items-center text-center p-6">
                            <IconHeadphones className="w-8 h-8 text-blue-600 mb-4" />
                            <h4 className="text-lg font-medium mb-2">{t('features.feature8')}</h4>
                            <p className="text-sm text-muted-foreground">
                                {t('features.feature6')}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-16 px-6 bg-white dark:bg-black max-w-6xl mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-12">{t('pricing.title')}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className={`border ${selectedPricing === 'FREE' ? 'ring-2 ring-blue-500 shadow-lg': 'shadow-md'}`} onClick={() => handlePricingChange('FREE')}>
                        <CardHeader>
                            <CardTitle className="text-center text-xl font-bold">{t('pricing.starter.title')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-center">
                            <p className="text-4xl font-bold">{formatCurrency(0)}</p>
                            <p className="text-sm text-muted-foreground">{t('pricing.starter.subtitle')}</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.starter.option1')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.starter.option2')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.starter.option3')}</li>
                            </ul>
                            <Button>{t('hero.action')}</Button>
                        </CardContent>
                    </Card>

                    <Card className={`border ${selectedPricing === 'PRO' ? 'ring-2 ring-blue-500 shadow-lg': 'shadow-md'}`} onClick={() => handlePricingChange('PRO')}>
                        <CardHeader>
                            <CardTitle className="text-center text-xl font-bold">{t('pricing.pro.title')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-center">
                            <p className="text-4xl font-bold">{formatCurrency(29)}</p>
                            <p className="text-sm text-muted-foreground">{t('pricing.pro.subtitle')}</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.pro.option1')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.pro.option2')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.pro.option3')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.pro.option4')}</li>
                            </ul>
                            <Button variant="default">{t('pricing.pro.option5')}</Button>
                        </CardContent>
                    </Card>

                    <Card className={`border ${selectedPricing === 'ENTERPRISE' ? 'ring-2 ring-blue-500 shadow-lg': 'shadow-md'}`} onClick={() => handlePricingChange('ENTERPRISE')}>
                        <CardHeader>
                            <CardTitle className="text-center text-xl font-bold">{t('pricing.custom.title')}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-center">
                            <p className="text-4xl font-bold">{t('pricing.custom.price')}</p>
                            <p className="text-sm text-muted-foreground">{t('pricing.custom.subtitle')}</p>
                            <ul className="text-sm space-y-1">
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.custom.option1')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.custom.option2')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.custom.option3')}</li>
                                <li className="flex items-center justify-center gap-2"><IconCheck className="w-4 h-4" /> {t('pricing.custom.option4')}</li>
                            </ul>
                            <Button variant="outline">{t('pricing.custom.option5')}</Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-16 px-6 max-w-4xl mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-12">{t('faq.title')}</h3>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqDatas.map((faq, index) => (
                        <AccordionItem key={index} value={faq.question}>
                            <AccordionTrigger>{t(faq.question)}</AccordionTrigger>
                            <AccordionContent>
                                {t(faq.answer)}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>
    )
}

export default HomePage;
