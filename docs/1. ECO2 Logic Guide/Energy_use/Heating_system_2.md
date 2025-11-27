# **1. 난방 에너지소요량 (Energy use for heating system) (2)**

## **Nomenclature**

### **Symbols**

<table>
  <thead>
    <tr>
      <th>Symbol</th>
      <th>Meaning</th>
      <th>Unit</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>$$A_c$$</td><td>집열면적 / Collector area</td><td>$$m^{2}$$</td></tr>
    <tr><td>$$b$$</td><td>계수 / Coefficient</td><td>$$-$$</td></tr>
    <tr><td>$$B$$</td><td>가로 넓이 / Width</td><td>$$m^{2}$$</td></tr>
    <tr><td>$$C$$</td><td>비열 / Specific heat capacity</td><td>$$kWh/(kg\cdot K)$$</td></tr>
    <tr><td>$$C$$</td><td>상수 / Constant</td><td>$$-$$</td></tr>
    <tr><td>$$d$$</td><td>연별/월별 일수 / Days per year/month</td><td>$$d/a,\, d/mth$$</td></tr>
    <tr><td>$$e$$</td><td>소비지수 / Expenditure factor</td><td>$$-$$</td></tr>
    <tr><td>$$f$$</td><td>계수 / Factor</td><td>$$-$$</td></tr>
    <tr><td>$$FC$$</td><td>부하계수 / Load factor</td><td>$$-$$</td></tr>
    <tr><td>$$h$$</td><td>높이 / Height</td><td>$$m$$</td></tr>
    <tr><td>$$IAM$$</td><td>입사수정계수 / Incidence angle modifier</td><td>$$-$$</td></tr>
    <tr><td>$$k$$</td><td>계수 / Coefficient</td><td>$$-$$</td></tr>
    <tr><td>$$L$$</td><td>길이 / Length</td><td>$$m$$</td></tr>
    <tr><td>$$n$$</td><td>횟수 / Number</td><td>$$-$$</td></tr>
    <tr><td>$$p$$</td><td>압력 / Pressure</td><td>$$kPa$$</td></tr>
    <tr><td>$$P$$</td><td>출력 / Power, energy output</td><td>$$W,\,kW$$</td></tr>
    <tr><td>$$PE$$</td><td>전력 소비 / Power input, consumption</td><td>$$W,\,kW$$</td></tr>
    <tr><td>$$q$$</td><td>손실 / Loss</td><td>$$-$$</td></tr>
    <tr><td>$$Q$$</td><td>에너지 / Energy</td><td>$$kWh/mth$$</td></tr>
    <tr><td>$$R$$</td><td>열손실율 / Heat loss rate</td><td>$$-$$</td></tr>
    <tr><td>$$SPF$$</td><td>가동지수 / Seasonal performance factor</td><td>$$-$$</td></tr>
    <tr><td>$$t$$</td><td>시간 / Time</td><td>$$h/d,\,h/mth,\,h/a$$</td></tr>
    <tr><td>$$U$$</td><td>열관류율 / Heat transfer coefficient</td><td>$$W/(m\cdot K)$$</td></tr>
    <tr><td>$$UA$$</td><td>열손실율 / Heat loss rate</td><td>$$W/K$$</td></tr>
    <tr><td>$$V$$</td><td>부피 / Volume</td><td>$$m^{3}$$</td></tr>
    <tr><td>$$\dot{V}$$</td><td>유량 / Volume flow rate</td><td>$$m^{3}/h$$</td></tr>
    <tr><td>$$W$$</td><td>보조에너지 / Auxiliary energy</td><td>$$kWh/mth$$</td></tr>
    <tr><td>$$Z$$</td><td>일일 가동시간 / Daily operating hours</td><td>$$h/day$$</td></tr>
    <tr><td>$$\alpha$$</td><td>시간 비율 / Time component</td><td>$$-$$</td></tr>
    <tr><td>$$\beta$$</td><td>부하율 / Part load ratio</td><td>$$-$$</td></tr>
    <tr><td>$$\eta$$</td><td>효율 / Efficiency</td><td>$$-$$</td></tr>
    <tr><td>$$\Theta$$</td><td>에너지 / Energy</td><td>$$W,\,kW$$</td></tr>
    <tr><td>$$\vartheta$$</td><td>온도 / Temperature</td><td>$$°C$$</td></tr>
    <tr><td>$$\rho$$</td><td>밀도 / Density</td><td>$$kg/l$$</td></tr>
  </tbody>
</table>

---

### **Subscripts**

<table>
  <thead>
    <tr>
      <th>Subscript</th>
      <th>Meaning</th>
      <th>Subscript</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>$$a$$</td><td>연간, 년 / Annual, Year</td><td>$$C$$</td><td>실내온도제어 / Indoor temperature control</td></tr>
    <tr><td>$$A$$</td><td>연결, 해석 / Connection, Analysis</td><td>$$ce$$</td><td>전달 / Transfer</td></tr>
    <tr><td>$$Abgl$$</td><td>상쇄 / Compensation</td><td>$$combi$$</td><td>난방과 급탕의 조합 / Heating & DHW combination</td></tr>
    <tr><td>$$App$$</td><td>기기 / Apparatus, Appliance</td><td>$$d$$</td><td>분배 / Distribution</td></tr>
    <tr><td>$$aux$$</td><td>보조에너지 / Auxiliary energy</td><td>$$DS$$</td><td>지역난방 기계실 / District heating station</td></tr>
    <tr><td>$$b$$</td><td>요구량 / Demand, Required</td><td>$$e$$</td><td>전기, 유효, 외부 / Electric, Effective, Outdoor</td></tr>
    <tr><td>$$B$$</td><td>대기모드, 구성요소 / Standby-, Component</td><td>$$ex$$</td><td>배기 / Exhaust</td></tr>
    <tr><td>$$Betrieb$$</td><td>가동 / Operation</td><td>$$f$$</td><td>2차 에너지, 팩터 / Final energy, Factor</td></tr>
    <tr><td>$$bin$$</td><td>등급 / Bin</td><td>$$FBH$$</td><td>바닥난방 / Floor heating</td></tr>
    <tr><td>$$Bio$$</td><td>바이오매스 / Biomass</td><td>$$fl$$</td><td>전부하 / Full load</td></tr>
    <tr><td>$$bp$$</td><td>이가 점 / Bivalent point</td><td>$$G$$</td><td>건물/존 / Building/Zone</td></tr>
    <tr><td>$$bu$$</td><td>재열 / Reheating</td><td>$$ges$$</td><td>전체, 총 / Total, Gross</td></tr>
    <tr><td>$$Grenz$$</td><td>경계 / Boundary</td><td>$$rd$$</td><td>회수 / Recovery</td></tr>
    <tr><td>$$GZ$$</td><td>기본사이클 / Basic cycle</td><td>$$reg$$</td><td>재생 가능한 / Regenerative</td></tr>
    <tr><td>$$h$$</td><td>난방 / Heating</td><td>$$rl$$</td><td>회수 가능한 / Recoverable</td></tr>
    <tr><td>$$h$$</td><td>난방공조</td><td>$$H$$</td><td>난방시스템 / Heating system</td></tr>
    <tr><td>$$rL$$</td><td>분석-운전시간 / Analysis operating time</td><td>$$HK$$</td><td>난방사이클 / Heating circuit</td></tr>
    <tr><td>$$RL$$</td><td>환수 / Return</td><td>$$hours$$</td><td>시간 / Hours</td></tr>
    <tr><td>$$rv$$</td><td>주택공조시스템 / Residential ventilation system</td><td>$$Hs/Hi$$</td><td>고위발열/저위발열 / Gross/Net calorific value</td></tr>
    <tr><td>$$RV$$</td><td>역류방지 / Backflow prevention</td><td>$$hydr$$</td><td>수압적 / Hydraulic</td></tr>
    <tr><td>$$s$$</td><td>저장기, 방사, 높은 / Storage, Radiation, High</td><td>$$i$$</td><td>내부 / Internal</td></tr>
    <tr><td>$$S$$</td><td>지관 / Branch pipe</td><td>$$SB$$</td><td>Standby-</td></tr>
    <tr><td>$$in$$</td><td>수용 / Input</td><td>$$Sch$$</td><td>연결 / Connection</td></tr>
    <tr><td>$$int$$</td><td>간헐적 / Intermittent</td><td>$$sek$$</td><td>2차 / Secondary</td></tr>
    <tr><td>$$intern$$</td><td>내부의 / Internal</td><td>$$sin$$</td><td>순수한 난방가동 / Pure heating operation</td></tr>
    <tr><td>$$Itc$$</td><td>정지포인트 / Intersection point</td><td>$$SL$$</td><td>관통하는 배관관</td></tr>
    <tr><td>$$K$$</td><td>복합기기 / Combined unit</td><td>$$slr$$</td><td>솔라시설의 부하율 / Solar system load ratio</td></tr>
    <tr><td>$$k$$</td><td>냉수, 보일러 / Cold water, Boiler</td><td>$$sol$$</td><td>솔라 / Solar</td></tr>
    <tr><td>$$km$$</td><td>평균 보일러(온도) / Mean boiler temperature</td><td>$$soll$$</td><td>요구, 이용 / Required, Setpoint</td></tr>
    <tr><td>$$L$$</td><td>공기온도프로필, 운전 시간 / Air temp. profile, Op. time</td><td>$$sys$$</td><td>시스템 / System</td></tr>
    <tr><td>$$loss$$</td><td>손실 / Loss</td><td>$$T$$</td><td>일일 / Daily</td></tr>
    <tr><td>$$lower$$</td><td>낮은 / Lower</td><td>$$Test$$</td><td>테스트조건 / Test condition</td></tr>
    <tr><td>$$m$$</td><td>평균 / Mean, Average</td><td>$$TH$$</td><td>항온밸브 / Thermostatic valve</td></tr>
    <tr><td>$$max$$</td><td>최대 / Maximum</td><td>$$upper$$</td><td>위의 / Upper</td></tr>
    <tr><td>$$mot$$</td><td>모터 / Motor</td><td>$$v$$</td><td>손실 / Loss</td></tr>
    <tr><td>$$vh$$</td><td>난방공조시스템</td><td>$$mth$$</td><td>월별 / Monthly</td></tr>
    <tr><td>$$V$$</td><td>주관 / Main pipe</td><td>$$n$$</td><td>정격, 지수 / Nominal, Index</td></tr>
    <tr><td>$$VL$$</td><td>공급 / Supply</td><td>$$N$$</td><td>야간 감소/정지 / Night setback/off</td></tr>
    <tr><td>$$w$$</td><td>급탕 / DHW</td><td>$$NA$$</td><td>기울기, 야간 / Slope, Night</td></tr>
    <tr><td>$$W$$</td><td>열 / Heat</td><td></td><td></td></tr>
  </tbody>
</table>


---  


### **1.4.5. 저장 과정 열손실**

* 저장 열손실 ($Q_{h,s}$) 저장 탱크의 열 손실은 아래와 같이 정의합니다.   

<div align="center">
$$
Q_{h,s} = f_{\text{verdindung}} \cdot \left( \frac{\theta_{h,s} - \theta_i}{45} \right) \cdot d_{h,\text{mth}} \cdot q_{B,S}  \tag{1.4.5-1}
$$
</div>

> Where,  
>
> • $f_{verdindung}$는 열 생산기기와 저장 탱크 간 연결 배관으로 인한 손실 계수입니다.  
> • $\vartheta_{h,s}$는 평균 저장 탱크 온도입니다. [°C]  
> • $\vartheta_{i}$는 평균 외기온도 입니다. [°C]  
> • $d_{h,mth}$는 월별 난방 일 수 입니다. [d]  
> • $q_{B,S}$는 대기 열 손실입니다. [kWh/d]  

열 생산기기 \- 저장탱크 연결 배관 열 손실

* 열 생산기기와 저장 탱크 위치가 동일할 때: \( f_{\text{verbindung}} = 1.2 \) 
* 열 생산기기와 저장 탱크 위치가 다를 때: \#.4.4의 배관손실처럼 계산

대기 열 손실일일 열 손실

<div align="center">
$$
q_{B,S} = 0.4 + 0.14 \cdot V^{0.45}  \tag{1.4.5-2}
$$
</div>

> Where,  
>
> • $V$는 저장 탱크 용량입니다. [L]  

* 비제어적 열획득: 축열조가 난방 중인 존 내에 설치된 경우, 이 손실은 해당 존의 비제어적 열획득으로 고려됩니다.    

<div align="center">$$
Q_{I,h,s} = Q_{h,s}  \tag{1.4.5-3}$$
</div>

* 저장 탱크용 펌프 보조에너지 (\( Q_{h,s,aux} \)) 축열조 운전을 위한 별도의 펌프가 있는 경우, 펌프의 보조에너지 소비량은 아래와 같습니다.  

<div align="center">$$
Q_{h,s,aux} = \left( \frac{P_{\text{Pump}}}{1000 W/kW} \right) \cdot t_P  \tag{1.4.5-4} $$
</div>

> Where,  
>
> • $P_{Pumpe}$는 펌프의 정격 전력 소비입니다. [W]  
> • $t_{P}$는 펌프의 운전 시간입니다. (해당 월 기준) [h]  

<div align="center">$$
t_{P} = \beta_{h,s}\cdot 24 [h/d]\cdot d_{h,mth} \text{ (열 생산기기와 동시 가동된다고 가정할 경우)}  \tag{1.4.5-5}$$</div>

> Where,  
>
> • $\beta_{h,s}$는 열 저장 부하율 입니다.  
> • $d_{h,mth}$는 월별 난방 일 수 입니다. [d]  


### **1.4.6. 열 생산기기(보일러)의 에너지 공급량(Heat output)**

* 난방 시스템에 태양열 시스템이나 공조 시설 등으로부터 열이 공급되면, 난방 시스템에서 요구하는 추가 열량을 보일러와 같은 열 생산기기로 공급해야 합니다. 이를 생산기기 잔여 열 공급량 ($Q_{h}^{*}$) 이라고 정의하고 아래와 같이 계산합니다.     

<div align="center">$$
Q^*_h = Q_{h,\text{outg}} - Q_{h,\text{sol}} - Q_{rv,h,\text{outg}}  \tag{1.4.6-1}
$$
</div>

> Where,  
>
> • $Q_{h,outg}$는 열 저장 부하율 입니다.  
> • $Q_{h,sol}$는 월별 난방 일 수 입니다. [d]  
> • $Q_{rv,h,outg}$는 월별 난방 일 수 입니다. [d]  




* 보일러가 여러 대 적용된 경우, 공급되는 열량은 차례대로 계산합니다.  
* 난방과 급탕이 하나의 보일러로 공급될 경우, 난방 운전시간에서 급탕을 위한 가동시간을 차감합니다.  
* 난방/급탕/공조를 위해 요구되는 보일러의 최대 성능은 동시 가동할 경우 모든 보일러 성능의 합 또는 순차 가동의 최대 보일러 성능으로부터 정합니다.   

<div align="center">$$
\dot{Q}_N = \max \left( \sum \dot{Q}_{N,\text{gleichzeitig}}, \dot{Q}_{\text{V orrang}} \right)  \tag{1.4.6-2}
$$
</div>
  

#### **1.4.6.1. 난방 보일러**
난방 열 생산 과정의 열손실 ($Q_{h,g}$) 은 보일러 종류에 따라 계산됩니다.
보일러의 정격 열 출력 ($\dot{Q}_{N}$)은 각 보일러의 부하율 ($\beta_{h,i}$)이 1 이하가 되도록 설계됩니다.
단일/동시/순차 가동 시 보일러의 부하율은 아래와 같습니다.
각 보일러는 평균 열 출력에 따라 순차적으로 가동하며, 
* 단일 보일러 부하율 (\( \beta_h \)):   
<div align="center">
$$
\beta_h = \frac{ \dot{Q}_{d,in} }{ \dot{Q}_N }  \tag{1.4.6.1-1}
$$
</div>

* 다수 보일러 동시 가동 시 부하율 (\(\beta_{h,i}\)):  
각 보일러의 부하율은 평균 열 출력과 각 보일러의 정격 열 출력의 합의 비 입니다.  

<div align="center">
$$\beta_{h,i}=\frac{\dot{Q}_{d,in}}{\sum\dot{Q}_{N,j}}\tag{1.4.6.1-2}$$</div>


* 다수 보일러 순차 가동 시 n번째로 가동되는 보일러의 부하율 (\(\beta_{h,n}\)):  

보일러의 정격 출력은 각 보일러가 가동되는 순서에 따라 단계별로 합산됩니다. 각 단계 이후 보일러의 출력의 합이 요구량 미만일 경우, 보일러는 최대 부하 가동을 유지합니다. 추가된 보일러의 출력 합이 요구량을 초과할 경우에만, 마지막 n 번째에 가동되는 보일러가 부분 부하로 가동합니다.  

<div align="center">
$$\beta_{h,n}=\frac{\dot{Q}_{d,in}-\sum\dot{Q}_{N,n-1}}{\dot{Q}_{N,n}}\quad(\dot{Q}_{d,in} \lt \sum\dot{Q}_{N,n} \text{ 일 경우}) \tag{1.4.6.1-3}$$</div>


> Where,  
>
> • $\beta_{h}$: 보일러의 부하율  
> • $\dot{Q}_{d,in}$: 열 분배망으로의 평균 열 공급량 [kW]  
> • $\dot{Q}_{N,n}$: 보일러의 정격 열 공급량 [kW]  

* 연료장전식 난방 보일러의 열 생산과정에서 종합 열 생산손실 (\( Q_{h,g} \)) 및 보조에너지 요구량(\( Q_{h,g,aux} \)):

보일러의 열 생산과정에서 발생하는 종합 열 생산손실 (\( Q_{h,g} \))과 보조에너지 요구량 (\( Q_{h,g,aux} \))은 보일러의 정격출력 (\( \dot{Q}_N \)), 정격 운전 효율(\( \eta_{K,100\%} \)), 부분 부하 효율 (\( \eta_{K,30\%} \)), 대기 손실 (\( q_{B,70} \)), 보조 전력 소비 (\( P_{aux} \)) 등으로부터 계산됩니다. 이러한 수치들은 제품 사양 값으로 적용됩니다.

종합 열 생산손실 ($Q_{h,g}$):

<div align="center">
$$
Q_{h,g} = \sum \left( Q_{h,g,v,i} \cdot d_{h,rB} \right)  \tag{1.4.6.1-4}
$$
</div>

* \( 0 < \beta_{h,i} \leq \beta_{K,pl} \) 일 경우:   
<div align="center">$$
Q_{h,g,v,i} = \left( \left( \frac{ \beta_{h,i} }{ \beta_{K,pl} } \cdot \dot{Q}_{v,g,pl} - \dot{Q}_{B,h} \right) + \dot{Q}_{B,h} \right) \cdot (t_{h,rL} - t_{w,100\%})  \tag{1.4.6.1-5}$$
</div>

* \( \beta_{K,pl} < \beta_{h,i} < 1.0 \) 일 경우:   
<div align="center">$$
Q_{h,g,v,i} = \frac{ \beta_{h,i} - \beta_{K,pl} }{ 1 - \beta_{K,pl} } \cdot (\dot{Q}_{V,g,100\%} - \dot{Q}_{V,g,pl}) \cdot (t_{h,rL} - t_{w,100\%})  \tag{1.4.6.1-6}$$
</div>

급탕 가열을 위한 보일러의 정격 출력 시 일일 운전 시간 (\(t_{w,100\%}\)):
<div align="center">$$
t_{w,100\%}=\frac{Q_{w,outg}}{\dot{Q}_{N}\cdot d_{Nutz,mth}} \tag{1.4.6.1-7}$$</div>

> Where,  
>
> • $Q_{h,g}:$ 난방 시스템의 종합 열 생산 손실 (해당 월 기준) [kWh]  
> • $Q_{h,g,v,i}:$ 각 보일러의 열 손실 [kWh/d]  
> • $d_{h,rB}:$ 설계 가동 일 수 (해당 월 기준) [d]  
> • $\beta_{h,i}:$ 보일러의 부하율  
> • $\dot{Q}_{V,g,pl}:$ 부분 부하 시 보일러의 열 출력 손실 [kW]  
> • $\dot{Q}_{B,h}:$ 대기 모드 시 보일러의 열 출력 손실 [kW]  
> • $t_{h,rL,T}:$ 일일 설계 운전 시간 [h]  
> • $t_{w,100\%}$ : 급탕 가열을 위한 보일러의 정격 출력 시 일일 운전 시간 [h]  (3. 급탕 에너지소요량 참조)
> • $Q_{w,outg}$ : 급탕용 열 생산기기의 열 출력 용량 (해당 월 기준) [kWh]  
> • $d_{Nutz,mth}$ : 급탕용 사용일 수 (해당 월 기준) [d]  

* 평균 열 출력 (\( \dot{Q}_{d,in} \)): 평균 열 출력 (\( \dot{Q}_{d,in} \))은 난방, 난방/급탕, 난방/급탕/공조 3가지로 구분되며 아래와 같이 계산합니다.  

* 난방 또는 난방/급탕 시:   
<div align="center">$$
\dot{Q}_{d,in} = \frac{ Q_{h,outg} }{ d_{h,rB} \cdot (t_{h,r,L,T} - t_{w,100\%}) }  \tag{1.4.6.1-8}
$$
</div>
 
* 난방/급탕/공조 시:
<div align="center">$$\dot{Q}_{d,in}=\sum(\frac{Q_{h,outg}}{t_{Betrieb,K}-t_{w,100\%}}\cdot d_{Nutz,mth})\tag{1.4.6.1-9}$$</div>
   
> Where,  
>
> • $\sum{Q_{h,outg}}:$ 총 열 공급량 [kWh]  
> • $t_{Betrieb,K}:$ 월별 생산기기 가동 시간 [h]  

* 보일러의 일일 열 손실: 보일러의 일일 열 손실은 대기(정지) 상태, 부분 부하 상태, 그리고 최대 부하(100%) 운전 상태에서의 손실로 구분됩니다.

* 대기 상태 손실 (\( \dot{Q}_{B,h}\)):
<div align="center">$$\dot{Q}_{B,h}=q_{B,\theta}\cdot(\frac{\dot{Q}_{N}}{\eta_{K,100\%}})\cdot f_{Hs/Hi}\tag{1.4.6.1-10}$$</div>
<div align="center">$$q_{B,\theta}=q_{B,70}\cdot\frac{\theta_{HK,m}-\theta_{i}}{70-20 [°C]}\tag{1.4.6.1-11}$$</div>

> Where,  
>
> • $q_{B,\vartheta}:$ 평균 보일러 온도에서 대기 손실 계수 [$-$]  
> • $\dot{Q}_{N}:$ 보일러의 정격 출력 [kW]  
> • $\eta_{k,100\%}:$ 최대 부하 시 보일러 효율  
> • $f_{Hs/Hi}:$ 사용된 연료의 고위-저위발열량 비  
> • $\vartheta_{HK,m}:$ 평균 보일러 온도 [°C]  
> • $\vartheta_{i}:$ 외기 온도 [°C]  

* 최대 부하 시 손실 (\(dot{Q}_{V,g,100\%}\)):  
<div align="center">$$
\dot{Q}_{V,g,100\%} = \frac{ f_{Hs/Hi} - \eta_{K,100\%,Betrieb} }{ \eta_{K,100\%,Betrieb} } \cdot \dot{Q}_N  \tag{1.4.6.1-12}
$$
</div>

* 부분 부하 시 손실 ($\dot{Q}_{V,g,pl\%}$):  
<div align="center">$$\dot{Q}_{V,g,pl}=\frac{f_{Hs/Hi}-\eta_{K,pl\%,Betrieb}}{\eta_{K,pl\%,Betrieb}}\cdot\beta_{K,pl}\cdot\dot{Q}_{N}\tag{1.4.6.1-13}$$</div>

* 보일러의 평균 운전 온도 ($\vartheta_{HK,m}$) (콘덴싱 보일러의 경우, 평균 회수 온도 $\vartheta_{RL,m}$ 사용)가 Table 1.4.6.1-14 의 테스트 온도와 다르면 보일러 효율은 바뀐 온도 조건에 맞춰야 합니다.

* 최대  부하 시 보일러 운전 효율 (\(\eta_{K,100\%,Betrieb}\)):  
<div align="center">
$$
\eta_{K,100\%,Betrieb}=\eta_{K,100\%}+G\cdot(\theta_{g,test,100}-\theta_{HK,m})  \tag{1.4.6.1-14}$$
</div>

* 부분 부하 시 보일러 운전 효율 (\(\eta_{K,pl\%,Betrieb}\)):

<div align="center">
$$
\eta_{K,\text{pl}\%,\text{Betrieb}} = \eta_{K,\text{pl}\%} + H \cdot (\theta_{g,\text{test},\text{pl}} - \theta_{HK,m})  \tag{1.4.6.1-15}
$$
</div>

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>보일러 온도 및 온도 보정계수</title>
  <style>
    body {
      font-family: Pretendard, Arial, sans-serif;
      margin: 40px;
    }
    h5 {
      text-align: center;
      margin-top: 40px;
    }
    table {
      margin: auto;
      border-collapse: collapse;
      width: 70%;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 12px;
      text-align: center;
    }
    th {
      background-color: #f9f9f9;
    }
  </style>
</head>
<body>

  <!-- Table 1 -->
  <h5>&lt;Table 1.4.6.1-16. 보일러 온도&gt;</h5>

  <table>
    <tr>
      <th>보일러 유형</th>
      <th>\(\theta_{g,\text{test,100}}\)<br>(부하 100%) (°C)</th>
      <th>\(\theta_{g,\text{test,pl}}\)<br>(부분 부하) (°C)</th>
    </tr>
    <tr>
      <th colspan="3">가스 / 기름</th>
    </tr>
    <tr>
      <td>표준</td>
      <td>70</td>
      <td>50</td>
    </tr>
    <tr>
      <td>저온</td>
      <td>70</td>
      <td>40</td>
    </tr>
    <tr>
      <td>콘덴싱</td>
      <td>70</td>
      <td>30</td>
    </tr>
  </table>

  <!-- Table 2 -->
  <h5>&lt;Table 1.4.6.1-17. 온도 보정계수&gt;</h5>

  <table>
    <tr>
      <th>보일러 유형</th>
      <th>계수 G</th>
      <th>계수 H</th>
    </tr>
    <tr>
      <td>표준 보일러</td>
      <td>0</td>
      <td>0.0004</td>
    </tr>
    <tr>
      <td>저온보일러</td>
      <td>0.0004</td>
      <td>0.0004</td>
    </tr>
    <tr>
      <td>가스 콘덴싱 보일러</td>
      <td>0.002</td>
      <td>0.002</td>
    </tr>
    <tr>
      <td>기름 콘덴싱 보일러</td>
      <td>0</td>
      <td>0.0004</td>
    </tr>
  </table>

</body>
</html>

 

* 존으로의 비제어적 열 유입 (\(Q_{I,h,g}\)): 열 생산기기가 설치된 존의 비제어적 열획득은 기기의 저장 열 손실 계수 (\(q_{s,\vartheta}\))로 계산됩니다.  

<div align="center">$$
Q_{I,h,g} = q_{s,θ} \cdot \frac{ \dot{Q}_N }{ \eta_{K,100\%} } \cdot (t_{h,rL,T} - t_{w,100\%}) \cdot d_{h,rB}  \tag{1.4.6.1-18}
$$
</div>

> Where,  
>
> • $q_{s,\vartheta}=0.5\cdot q_{B,\vartheta}$ (가스보일러)  
> • $q_{s,\vartheta}=0.75\cdot q_{B,\vartheta}$ (그 외 모든 보일러)  
> • $q_{B,\vartheta}:$ 평균 보일러 온도에서 대기 손실 계수 [$-$]  
> • $t_{h,rL,T}:$ 일일 설계 운전 시간 [h]  
> • $t_{w,100\%}$ : 급탕 가열을 위한 보일러의 정격 출력 시 일일 운전 시간 [h]  


* 난방 보조에너지 (\( Q_{h,g,aux} \)): 보일러의 난방 보조에너지는 급수-환수 온도 차 \(20^{\circ}C\) 일 때 유량 및 평균 부하율 (\(\beta_{h,i}\))를 기준으로 최대 부하/부분 부하/대기 모드에서 측정된 보일러의 보조 전력소비 (\(P_{aux}\)) 을 기반으로 산정합니다.  

<div align="center">$$Q_{h,g,aux}=\sum(P_{h,g,aux,i}\cdot(t_{h,rL}-t_{w,100\%}\cdot\frac{d_{mth}\cdot d_{Nutz,a}}{365 [d]})+P_{aux,SB}\cdot(24\cdot d_{mth}-t_{h,rL})\tag{1.4.6.1-19}$$</div>

* \(0\le\beta_{h,i}\le\beta_{K,pl}\):

<div align="center">$$P_{h,g,aux,i}=(\frac{\beta_{h,i}}{\beta_{K,pl}})\cdot(P_{aux,pl,i}-P_{aux,SB})+P_{aux,SB}  \tag{1.4.6.1-20}$$</div>

* \(\beta_{K,pl}\le\beta_{h,i}\le1.0\):

<div align="center">$$P_{h,g,aux,i}=\frac{\beta_{h,i}-\beta_{K,pl}}{1-\beta_{K,pl}}\cdot(P_{aux,100}-P_{aux,pl})+P_{aux,pl}  \tag{1.4.6.1-21}$$</div>


> Where, 
> 
> • $Q_{h,g,aux}:$ 난방 열 생산 보조에너지 [kWh]  
> • $P_{h,g,aux,i}:$ 보일러의 운전 중 보조 에너지 소비 [kW]  
> • $P_{aux,SB}:$ 보일러의 대기모드 보조 에너지 소비 [kW]  
> • $P_{aux,100}:$ 보일러의 최대 부하 보조 에너지 소비 [kW]  
> • $P_{aux,pl}:$ 보일러의 부분 부하 보조에너지 소비 [kW]  
> • $\beta_{h,i}:$ 보일러의 평균 부하율  
> • $\beta_{K,pl}:$ 보일러의 부분 부하 시 부하율  
> • $t_{h,rL}:$ 월별 설계 운전 시간 [h]  
> • $t_{w,100\%}$ : 급탕 가열을 위한 보일러의 정격 출력 시 일일 운전 시간 [h]  
> • $d_{mth}:$ 월별 일 수 (해당 월 기준) [$-$]  
> • $d_{Nutz,a}:$ 연간 사용일 수 [d]  

* **다양한 보일러의 보조 전력소비 ($P_{aux}$) [kW]**
* **표준-난방 보일러**
* 가스 보일러:   
<div align="center">$$
P_{aux,100} = P_{aux,p} = \frac{0.148 \cdot \dot{Q}_N + 40}{1000}  \tag{1.4.6.1-22}$$
</div>

* 분무식 보일러 (가스/기름):   
<div align="center">$$
P_{aux,100} = 0.045 \cdot \dot{Q}_N^{0.48}  \tag{1.4.6.1-23}$$
</div>

<div align="center">$$
P_{aux,pl} = 0.015 \cdot \dot{Q}_N^{0.48}  \tag{1.4.6.1-24}$$
</div>

* **저온 보일러**
* 가스 보일러:  
<div align="center">$$
P_{aux,100} = P_{aux,pl} = \frac{0.148 \cdot \dot{Q}_N + 40}{1000}  \tag{1.4.6.1-25}$$
</div>

* 분무식 보일러 (가스/기름):   
<div align="center">$$
P_{aux,100} = 0.045 \cdot \dot{Q}_N^{0.48}  \tag{1.4.6.1-26}$$
</div>

<div align="center">$$
P_{aux,pl} = 0.015 \cdot \dot{Q}_N^{0.48}  \tag{1.4.6.1-27}$$
</div>

* **콘덴싱 보일러:** 
<div align="center">$$P_{aux,100} = 0.045 \cdot \dot{Q}_N^{0.48}  \tag{1.4.6.1-28}$$
</div>  

<div align="center">$$P_{aux,pl} = 0.015 \cdot \dot{Q}_N^{0.48}  \tag{1.4.6.1-29}$$
</div>


### **1.4.7. 분산형 연료 연소식 시스템 (Decentralized fuel-fired systems)**
* 분산형의 경우 에너지 공급, 제어 및 배출, 분배 및 생산에 필요한 에너지들은 하나의 계수로 고려되어 열 생산기기의 에너지 소요량 ($Q_{h,f}$)을 계산합니다.

#### **1.4.7.1. 실내 가스히터**

* 굴뚝 연계식 (1985년 이전):
<div align="center">$$Q_{h,f}=1.4\cdot Q_{h,b} \text{ (월간)}\tag{1.4.7.1-1}$$</div>
* 굴뚝 연계식 (1985년 이후):
<div align="center">$$Q_{h,f}=1.34\cdot Q_{h,b} \text{ (월간)}\tag{1.4.7.1-2}$$</div>
* 외벽-기기 (1985년 이전):
<div align="center">$$Q_{h,f}=1.47\cdot Q_{h,b} \text{ (월간)}\tag{1.4.7.1-3}$$</div>
* 외벽-기기 (1985년 이후):
<div align="center">$$Q_{h,f}=1.40\cdot Q_{h,b} \text{ (월간)}\tag{1.4.7.1-4}$$</div>

#### **1.4.7.2. 증발버너 기름연소난로**

* 1985년 이전:
<div align="center">$$Q_{h,f}=1.4\cdot Q_{h,b} \text{ (월간)}\tag{1.4.7.2-1}$$</div>
* 1985년 이후:
<div align="center">$$Q_{h,f}=1.34\cdot Q_{h,b} \text{ (월간)}\tag{1.4.7.2-2}$$</div>

#### **1.4.7.3. 홀 난방기**

* 복사열 파이프 (radiant tube heater), 분산형 대류 공기 난방기 (decentralized convection air heater):
<div align="center">$$Q_{h,f}=(1-f)\cdot Q_{h,b}\tag{1.4.7.3-1}$$</div>


<center>
     <div><strong>Table 1.4.7.3-2. 홀 난방기 효율 계수 f</strong></div>
     <img src="../../_tables/1.4.7.3_2.png" style="max-width: 80%;" alt="이용 효율">
</center>

* 복사열 히터의 열 생산손실 ($Q_{h,g}$) [kWh]:
<div align="center">$$Q_{h,g}=V_{abluft,spez}\cdot C_{p,Abluft}\cdot(\theta_{Abluft}-\theta_{Au\beta en})\cdot t_{h,rL}\tag{1.4.7.3-3}$$</div>
* 복사열 히터의 보조에너지 ($Q_{h,g,aux}$): 벽 또는 천정에 설치된 팬의 전력 소비량 (해당 월 기준) [kWh]
<div align="center">$$Q_{h,g,aux} = 0.0006 \cdot Q_{h,b}\tag{1.4.7.3-4}$$</div>

> Where,  
>
> • $V_{Abluft,spez}:$ 단위 연소 공기 요구량 $= 10\,m^{3}$ (열 부하 1 kWh 당)  
> • $c_{p,Abluft}:$ 공기의 등압 비열 $=0.361\,Wh/m^{3}\cdot K$  
> • $\vartheta_{Abluft}:$ 배출 공기 온도 $=18\,^{\circ} C$  
> • $\vartheta_{e}:$ 평균 월간 외기 온도 [$^{\circ} C$]  
> • $t_{h,rL}:$ 월별 설계 운전 시간 [h]  

#### **1.4.7.4. 전기 보일러**

* 개별 생산식의 저장 및 생산 열 손실:
<div align="center">$$Q_{h,s}+Q_{h,g}=0.11\cdot Q_{h,outg} \text{ (월간) [kWh]}\tag{1.4.7.4-2}$$</div>
* 통합 생산식의 저장 및 생산 열 손실:
<div align="center">$$Q_{h,s}+Q_{h,g}=0.09\cdot Q_{h,outg} \text{ (월간) [kWh]}\tag{1.4.7.4-3}$$ </div>
     

#### **1.4.7.5. 원/근거리 지역난방**

* 지역난방 시 건물 기계실에서의 연간 열 생산손실 ($Q_{h,g,DS}$): 
<div align="center">$$Q_{h,g,DS}=H_{DS}\cdot(\theta_{DS}-\theta_{i})\tag{1.4.7.5-1}$$</div>  
수식 (1.4.7.5-2)는 단위를 제외하고 값만 계산합니다.  
<div align="center">$$H_{DS}=B_{DS}\cdot\Phi_{DS}^{1/3}\tag{1.4.7.5-2}$$
$$\theta_{DS}=D_{DS}\cdot\theta_{prim,DS}+(1-D_{DS})\cdot\theta_{sek,DS}\tag{1.4.7.5-3}$$</div>

> Where,  
>
> • $Q_{h,g,DS}:$ 지역난방 시 기계실에서의 연간 열 생산 손실 [kWh/a]  
> • $H_{DS}$: 지역난방 계수 $[kWh/K\cdot a]$  
> • $B_{DS}$: 기계실 단열 등급 및 지역난방 유형에 따른 계수  
> • $\Phi_{DS}$: 기계실의 정격 출력 ($=\dot{Q}_{N})$ $[kW]$  
> • $D_{DS}$: 1차 측 온도 및 지역난방 유형에 따른 계수  
> • $\theta_{prim,DS}$: 지역난방 1차(primary) 측 평균 온도 $[^{\circ}C]$  
> • $\theta_{sek,DS}$: 지역난방 2차(secondary) 측 평균 온도 $[^{\circ}C]$  


<center>
     <div><strong>Table 1.4.7.5-4. 지역난방 1차 측 온도 및 지역난방 유형에 따른 계수 \(D_{DS}\)</strong></div>
     <img src="../../_tables/1.4.7.5_4.png" style="max-width: 80%;" alt="\(D_{DS}\)">
</center>


<center>
     <div><strong>기계실 단열 등급 및 지역난방 유형에 따른 계수 \(B_{DS}\)</strong></div>
     <img src="../../_tables/1.4.7.5_5.png" style="max-width: 80%;" alt="\(B_{DS}\)">
</center>

원칙적으로 월별로 고려가 가능하지만 ECO2에서는 계산 기간을 연 단위로, 연간 변하지 않는 열손실을 적용해 계산합니다. 지역난방 열이 건물에 중계되는 과정에서 발생하는 보조에너지는 건물 외부에서 소비되는 에너지이므로 무시됩니다. 기계실에서 건물 난방 시스템에 대한 공급온도 제어를 하면 이에 대한 보조에너지는 월간 \(Q_{h,g,aux}=10\,kWh\) 를 적용합니다.  

---  

## **1.5. HVAC 가열 유닛(Heating coil) 에너지 요구량 (Energy need)**

공조시스템(HVAC)의 가열유닛 (heating coil)에 필요한 에너지 요구량 (\(Q_{h^{*},b}\))은 에너지요구량. 2. 냉방 및 난방 에너지요구량에서 계산된 공조 가열 에너지요구량(\(Q_{vh,b}\))에 전달 및 분배 과정에서 발생하는 손실을 더하여 산정됩니다.

<div align="center">$$
Q_{h^{*},b}=Q_{vh,b}+Q_{vh,ce}+Q_{vh,d}\tag{1.5-1}$$</div>

> Where,  
>
> • $Q_{h^{*},b}:$ 가열유닛의 에너지 요구량 $[kWh]$  
> • $Q_{vh,b}:$ 공조 가열 에너지요구량 $[kWh]$  
> • $Q_{vh,ce}:$ 공조 가열 전달 과정 열 손실 $[kWh]$  
> • $Q_{vh,d}:$ 공조 가열 분배 과정 열 손실 $[kWh]$  

### **1.5.1. 전달 과정 열손실 (\(Q_{vh,ce}\))**
공조시스템에서 존으로 열을 전달하는 과정의 손실이며, 별도의 기준이 없는 경우 전달 효율 (\(\eta_{vh,ce}\))은 1로 가정합니다.
<div align="center">$$
Q_{vh,ce}=(1-\eta_{vh,ce})\cdot Q_{vh,b}\tag{1.5.1-1}$$</div>

### **1.5.2. 분배 과정에서의 손실 (\(Q_{vh,d}\))**
* 건물 내부 배관: 건물 전체 에너지 균형 관점에서 손실을 0으로 고려합니다.
<div align="center">$$Q_{vh,d}=0\tag{1.5.2-1}$$</div>

* 건물 외부 배관: 외부에 설치된 배관의 표면적 (\(A_{K,A}\))과 가동 시간 (\(t_{h^{*},op,mth}\))을 기준으로 열손실을 계산합니다. 배관 단열재의 열전도율은 \(0.04\,W/m\cdot K\), 두께는 \(50\,mm\)를 가정합니다.
<div align="center">$$Q_{vh,d}=f_{vh,d}\cdot A_{K,A}\cdot\frac{t_{h^{*},op,mth}}{1000}\tag{1.5.2-2}$$</div>

> Where,  
>
> • $f_{vh,d}:$ 공기 분배에 대한 열 손실 계수 (난방 시 표준값: $16\, W/m^{2}$)  
> • $A_{K,A}:$ 건물 외부에 설치된 배관의 외피 면적 $[m^{2}]$  
> • $t_{h^{*},op,mth}:$ HVAC 난방 시스템의 요구 운전 시간 (해당 월 기준) [h]  


### **1.5.3. 누기율**

덕트 누기에 의한 열손실은 무시합니다.

### **1.5.4. HVAC 가열유닛 온수 시스템 온도 (\(\vartheta_{h^{*},op}\))**

공조기 가열유닛의 예열(preheating) 및 재열(reheating)을 위한 온수 공급 온도 (\(\vartheta_{h^{*},op}\))는 설계상 월별 평균값을 확정해야 합니다.
설계 값이 없는 경우, \(\vartheta_{h^{*},op}=70/55\,°C\)를 표준값으로 사용합니다.

### **1.5.5. HVAC 가열유닛 운전시간 (\(t_{h^{*},op,mth}\))**
* HVAC 가열유닛의 월별 운전시간 ($t_{h^{*},op,mth}$)은 가열유닛의 연간 운전시간 (\(t_{H}\))으로부터 계산됩니다.

<div align="center">$$
t_{h^{*},op,mth}=t_{H}\cdot(\frac{b_{vh,mth}}{b_{vh,a}})\tag{1.5.5-1}$$</div>

  * \(t_{h^{*},op,mth} \gt t_{RLT-Betrieb,mth}\)일 경우: \(t_{h^{*},op,mth}=t_{RLT-Betrieb,mth}\)
  * \(t_{h^{*},op,mth} \lt 0.1\cdot t_{RLT-Betrieb,mth}$ 일 경우: $t_{h^{*},op,mth}=0.1\cdot t_{RLT-Betrieb,mth}\)  

* 월간 완전 이용 시간 (\(b_{vh,mth}\)):
<div align="center">$$
b_{vh,mth}=\frac{Q_{vh,b}}{\dot{Q}_{H,max}}\tag{1.5.5-2}$$</div>

* 연간 총 이용시간 (\(b_{vh,a}\)):
<div align="center">$$b_{vh,a}=\sum_{1}^{12}b_{vh,mth}\tag{1.5.5-3}$$</div>

* 가열유닛 연간 운전시간(\(t_{H}\)):
<div align="center">$$t_{H}=t_{H,r}\cdot t_{V,mech}\cdot d_{V,mech}\tag{1.5.5-4}$$</div>

* 월간 HVAC 운전시간(\(t_{RLT-Betrieb,mth}\)):
<div align="center">$$t_{RLT-Betrieb,mth}=\frac{d_{mth}}{365}\cdot d_{op,a}\cdot t_{h^{*},op}\tag{1.5.5-5}$$</div>

> Where,  
>
> • $t_{h^{*},op,mth}:$ HVAC 가열유닛의 월별 운전시간 [h]  
> • $t_{H}:$ 가열유닛 연간 운전시간 [h]  
> • $t_{RLT-Betrieb,mth}:$ 월간 HVAC 운전시간 [h]  
> • $d_{op,a}:$ 연간 가동 일 수 (용도프로필 참고) [d]   
> • $t_{h^{*},op}:$ HVAC 가열유닛의 일일 가동 시간 (용도프로필 참고) [h]  
> • $b_{vh}:$ 최대부하 운전 가동 시간 (Full utilization hours) (월간, 연간) [h]  
> • $Q_{vh,b}:$ 공조 가열 에너지요구량 $[kWh]$  
> • $\dot{Q}_{H,max}:$ 최대 HVAC 가열 출력 $[kW]$  
> • $Q_{vh,d}:$ 공조 가열 분배 과정 열 손실 $[kWh]$  

* 운전시간의 정확한 산정법이 나와있지 않아 추후 논의 필요