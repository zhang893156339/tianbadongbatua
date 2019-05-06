let yd_16 = document.getElementsByClassName("yd-16")[0];
let yd_17 = document.getElementsByClassName("yd-17")[0];
let yd_18 = document.getElementsByClassName("yd-18")[0];
let yd_19 = document.getElementsByClassName("yd-19")[0];
let str = "";
let str1 = "";
let str2 = "";
let str3 = "";
for(let i = 1; i <= 24; i++) {
	str += `<div style="background: url(img/tu-${i}.jpg) no-repeat center;width:100%;height:120px;"></div>`;
}
yd_16.innerHTML = str;
let ydhw = yd_16.children[3];
ydhw.innerHTML = "<p><strong>椰岛海王酒系列,</strong>由海参、龙眼肉、砂仁、枸杞子等药材科学组方，以优质白酒作酒基，采用现代高科技提取技术，在保持药物活性的基础上，酒体呈琥珀色，澄清透明，药香、酒香复合舒适，绵甜醇和，口感柔顺、协调，后味净爽，具有独特风格，为健康佐餐之佳酿。产品自投入市场以来，亦获得良好的市场反映，销售量节节攀升，市场份额迅速扩张。</p>";
for(let i = 45; i <= 56; i++) {
	str1 += `<div style="background: url(img/yd_${i}.jpg) no-repeat center;width:1200px;height:125px;margin:0 auto;"></div>`;
}
yd_17.innerHTML = str1;
let ydlg = yd_17.children[1];
ydlg.innerHTML = "<div><p><strong>椰岛鹿龟酒，</strong>15味药材，69道工序，<strong> 非物质文化遗产酿泡技艺，</strong>铸就椰岛鹿龟酒的优良品质。</p><p>椰岛鹿龟酒具有悠久历史渊源和深厚文化内涵，在传统的养生古方的基础上，结合现代科技工艺，经过科学配伍，研制而成今日的椰岛鹿龟酒。主要采用鹿茸、鹿骨胶、龟板胶、黄精、党参、熟地等十五味传统中药材加上海南特酿的米酒经过现代特殊工艺精制而成。</p><p>2007年被评为中国名牌产品，“最具影响力的海南知名品牌”；2012年鹿龟酒酿泡技艺被评为海南省非物质文化遗产；2016年荣获海南省名牌产品称号等。</p></div>"
for(let i = 58; i <= 75; i++) {
	if(i == 58) {
		str2 += `<div style="background: url(img/yd_${i}.jpg) no-repeat center;width:100%;height:212px;"></div>`;
	} else if(i == 59) {
		str2 += `<div style="width:100%;height:327px;"></div>`;
	} else if(i == 60) {
		str2 += `<div style="background: url(img/yd_${i}.jpg) no-repeat center;width:100%;height:181px;"></div>`;
	} else {
		str2 += `<div style="background: url(img/yd_${i}.jpg) no-repeat center;width:100%;height:120px;"></div>`;
	}
}
yd_18.innerHTML = str2;
let ydgs = yd_18.children[1];
ydgs.innerHTML = "<div style='background:#fff;width:1190px;height:100%;margin:0 auto;'><div style='width:1080px;height:292px;margin:0 auto;font-size: 18px;line-height: 30px;text-indent: 2em;text-align: justify;padding-top: 40px;'><p style='padding:4px'>海南椰岛酒业发展有限公司成立于2015年5月，公司前身为海南椰岛酒业酿造有限公司，均是隶属于海南椰岛(集团)股份有限公司的全资子公司。2010年公司积极响应海口市政府号召进行搬迁，从原海口市中心龙华路搬迁至海口市秀英区药谷二期，被列为2010年、2011年省重点项目。</p><p style='padding:4px'>公司生产基地由药谷基地（占地面积200亩）和老城原酒基地（占地105亩）组成。厂区布局符合GMP要求，厂房包装车间配置了五条保健酒生产线和六条配制酒、白酒包装生产线，并有配套的发酵车间、配制车间、原辅料库、包材库、成品库、白酒酿造车间、勾调车间、酒库（陶缸、不锈钢罐）等功能间。</p><p style='padding:4px'>公司品质控制实施“原料源头把控，产品生产过程流程控制，最终产品检验合格后放行”，严把产品质量关。拥有强大的研发队伍。生产设备设施配套完善。</p></div></div>"
for(let i = 77; i <= 92; i++) {
	str3 += `<div style="background: url(img/yd_${i}.jpg) no-repeat center;width:1200px;height:125px;margin:0 auto;"></div>`;
}
yd_19.innerHTML = str3;
let ydys = yd_19.children[6];
ydys.innerHTML = "<div style='width:1000px;margin:0 auto;padding:50px;font-size:24px;line-height: 36px;text-indent: 2em;text-align: justify;'><p>海南椰岛厂商一体化构建理念与696营销思维</p><p>海南椰岛与合作伙伴一起构建厂商一体化运营模式，运用696营销思维与合作伙伴共同分享大健康产业8万亿市场!</p></div>"
