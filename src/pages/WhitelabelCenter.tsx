import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const WhitelabelCenter = () => {
  const { language } = useLanguage();

  const packages = [
    {
      title: language === 'zh' ? 'VPN创业计划' : 'VPN Startup Plan',
      subtitle: language === 'zh' ? '终身授权套餐(1端)' : 'Lifetime License (1 Platform)',
      price: '1999 USD',
      platforms: language === 'zh' ? '1端(1*电脑端 or 1*手机端)' : '1 Platform (1*PC or 1*Mobile)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/291683_93024.jpeg',
      features: [
        language === 'zh' ? '提供终身授权证书' : 'Lifetime authorization certificate',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端软件)' : 'Advanced client (Client software)',
        language === 'zh' ? '管理面板(提供管理面板链接)' : 'Management panel (Panel link)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? '绑定1个域名(可申请更换域名)' : 'Bind 1 domain (Can change)',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '可加500U配置线路和专线' : 'Add 500U for routes and dedicated lines',
      ],
    },
    {
      title: language === 'zh' ? 'VPN创业计划' : 'VPN Startup Plan',
      subtitle: language === 'zh' ? '终身授权套餐(2端)' : 'Lifetime License (2 Platforms)',
      price: '3999 USD',
      platforms: language === 'zh' ? '2端(2*电脑端 or 2*手机端)' : '2 Platforms (2*PC or 2*Mobile)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/86139_70414.jpeg',
      popular: true,
      features: [
        language === 'zh' ? '提供终身授权证书' : 'Lifetime authorization certificate',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端软件)' : 'Advanced client (Client software)',
        language === 'zh' ? '管理面板(提供管理面板链接)' : 'Management panel (Panel link)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? '绑定1个域名(可申请更换域名)' : 'Bind 1 domain (Can change)',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '首月赠送价值500U节点' : 'First month 500U value nodes gift',
      ],
    },
    {
      title: language === 'zh' ? 'VPN深度合作伙伴' : 'VPN Deep Partner',
      subtitle: language === 'zh' ? '终身授权套餐(5端)' : 'Lifetime License (5 Platforms)',
      price: '5999 USD',
      platforms: language === 'zh' ? '5端(2*电脑端 2*手机端 Web)' : '5 Platforms (2*PC 2*Mobile Web)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/319948_754656.jpeg',
      features: [
        language === 'zh' ? '提供终身授权证书' : 'Lifetime authorization certificate',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端软件)' : 'Advanced client (Client software)',
        language === 'zh' ? '管理面板(提供管理面板链接)' : 'Management panel (Panel link)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? '绑定1个域名(可申请更换域名)' : 'Bind 1 domain (Can change)',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '首月赠送价值500U节点' : 'First month 500U value nodes gift',
      ],
    },
    {
      title: language === 'zh' ? 'VPN超级合作伙伴' : 'VPN Super Partner',
      subtitle: language === 'zh' ? '买断套餐(5端)' : 'Buyout Package (5 Platforms)',
      price: '12999 USD',
      platforms: language === 'zh' ? '5端(2*电脑端 2*手机端 Web)' : '5 Platforms (2*PC 2*Mobile Web)',
      image: 'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_1/11379024/858737_324401.png',
      premium: true,
      features: [
        language === 'zh' ? '提供完整源码（无授权）' : 'Complete source code (No authorization)',
        language === 'zh' ? '支持全协议(中国地区可用)' : 'Full protocol support (China available)',
        language === 'zh' ? '官网(提供1个VPN官网源码)' : 'Official website (1 VPN website source code)',
        language === 'zh' ? '高级客户端(提供客户端源码)' : 'Advanced client (Client source code)',
        language === 'zh' ? '管理面板(提供管理面板源码)' : 'Management panel (Panel source code)',
        language === 'zh' ? '技术支持(提供免费技术支持)' : 'Technical support (Free support)',
        language === 'zh' ? '加密隐私(保护用户隐私安全)' : 'Privacy encryption (User privacy protection)',
        language === 'zh' ? '支付网关(支持多种收款方式)' : 'Payment gateway (Multiple payment methods)',
        language === 'zh' ? '终身更新(享受终身免费更新)' : 'Lifetime updates (Free updates)',
        language === 'zh' ? '部署教程(提供软件部署教程)' : 'Deployment tutorial',
        language === 'zh' ? 'API文档(提供完整的使用文档)' : 'API documentation (Complete docs)',
        language === 'zh' ? '完全开源(用户可修改任何源码)' : 'Fully open source (Modify any code)',
        language === 'zh' ? '支持付费定制新功能/新UI' : 'Support paid custom features/UI',
      ],
      extras: [
        language === 'zh' ? '提供免费部署服务' : 'Free deployment service',
        language === 'zh' ? '提供1年免费技术支持' : '1 year free technical support',
        language === 'zh' ? '可免费接入代收款服务' : 'Free payment collection service',
        language === 'zh' ? '购买其他产品享受20%优惠' : '20% discount on other products',
        language === 'zh' ? '首月赠送价值500U节点' : 'First month 500U value nodes gift',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '一站式VPN贴牌套餐' : 'One-Stop VPN White Label Packages'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {language === 'zh' 
              ? '0首付上线，官网仅支持USDT付款（如需公司转账, 支付宝转账，请联系客服获取。）'
              : '0 down payment to launch. Official website only supports USDT payment (Contact customer service for company transfer or Alipay transfer.)'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className={`bg-card border-border hover:border-primary/50 transition-all relative ${pkg.popular ? 'border-primary' : ''} ${pkg.premium ? 'border-primary shadow-glow' : ''}`}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                  {language === 'zh' ? '热门' : 'Popular'}
                </Badge>
              )}
              {pkg.premium && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary">
                  {language === 'zh' ? '推荐' : 'Premium'}
                </Badge>
              )}
              <CardHeader>
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <div className="text-sm text-muted-foreground mb-2">{pkg.subtitle}</div>
                <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">{pkg.price}</div>
                <div className="text-sm text-muted-foreground mb-4">{pkg.platforms}</div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{language === 'zh' ? '套餐内容：' : 'Package Content:'}</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">{language === 'zh' ? '额外服务：' : 'Extra Services:'}</h4>
                  <ul className="space-y-2">
                    {pkg.extras.map((extra, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-primary">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="font-medium">{extra}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-gradient-primary" size="lg" asChild>
                  <a href="https://t.me/ximi1688" target="_blank" rel="noopener noreferrer">
                    {language === 'zh' ? '立即购买' : 'Buy Now'}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-8">
          <Button size="lg" className="bg-gradient-primary" asChild>
            <a href="https://t.me/ximi1688" target="_blank" rel="noopener noreferrer">
              {language === 'zh' ? '联系客服' : 'Contact Customer Service'}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhitelabelCenter;
