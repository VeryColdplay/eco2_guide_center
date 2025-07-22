# 2.2. 냉방 에너지소요량 (Energy use for cooling system)


## 2.2.1. 개요
본 절은 냉방 시스템의 각 단계(전달, 분배, 저장, 생산)에서 산출된 손실, 소요량, 보조에너지를 종합하여, **최종적으로 냉열 생산기기(히트펌프 등)가 공급해야 하는 총에너지 소요량을 산정**하는 방법을 기술합니다.

<center>
     <img src="../../_images/image_2.2_1.png" style="max-width: 50%;" alt="제 2.2장에서 다루는 범위">
     <div><strong>제 2.2장에서 다루는 범위</strong></div>
</center>

<center>
     <img src="../../_images/image_2.2_2.png" style="max-width: 50%;" alt="HVAC 시스템 냉각 유닛 계산 과정">
     <div><strong>HVAC 시스템 냉각 유닛 계산 과정</strong></div>
</center>

<center>
     <img src="../../_images/image_2.2_3.png" style="max-width: 50%;" alt="실내냉방 시스템 계산 과정">
     <div><strong>실내냉방 시스템 계산 과정</strong></div>
</center>


---

## 2.2.1.1. 공조 시스템 급기 온도 설정
공조 시스템은 실내 열적 쾌적도를 유지해야 하므로 시스템 터미널 유닛(terminal unit) 출구의 급기 온도와 존의 평균 실내 온도 간의 차가 아래 표를 초과해서는 안됩니다.

<center>
     <div><strong>공조 시스템에 유형에 따른 급기 온도 차 표준값 (에너지 성능 증명을 위해서만 사용하고, 실제 설계에 사용되지 않음)</strong></div>
     <img src="../../_tables/2.2_1.png" style="max-width: 80%;" alt="공조 시스템에 유형에 따른 급기 온도 차 표준값 (에너지 성능 증명을 위해서만 사용하고, 실제 설계에 사용되지 않음)">
</center>


## 2.2.2. 공조 냉방 개요 
공조 요구량에서 산정한 공조 요구량 중 냉방 요구량만 분리하여 공조 냉방 시스템의 에너지 소요량을 산정합니다. 공조기기의 냉각유닛에 대한 생산기기 냉열공급량과 실내냉방시스템에 대한 생산기기 냉열공급량은 사용기기별로 분리되어 최종적으로 합산되고, 개별 생산기기와 분배시스템의 소요량은 총 소요량 산정 과정에서 통합됩니다.

### 2.2.1.1. 공조기기 냉열 에너지 요구량(\(Q_{c*,b}\))
공조기기 냉각 유닛의 에너지 요구량은 2.2에서 산정한 냉방 에너지 요구량\(Q_{vc,b}\)과 전달 및 분배 과정의 손실을 합하여 산정합니다.
<div align="center">$$
Q_{c^*,b} = Q_{vc,b} + Q_{vc,ce} + Q_{vc,d}
$$</div>


**- 전달 손실(\(Q_{vc,ce}\))**: 대다수의 시스템에서 전달 손실 기준은 없으며, 전달 과정 효율 (\(η_{vc,ce}\))은 1을 적용합니다.
<div align="center">$$
Q_{vc,ce} = \left(1 - \eta_{vc,ce}\right) \cdot Q_{vc,b}
$$</div>


**- 분배 손실(\(Q_{vc,d}\))**: 급기 온도가 실내 목표 온도보다 크게 낮지 않으면 (-10 K  이내) 분배 과정에서 발생하는 열손실은 상수값을 적용한다. 건물 외부에서 분배할 경우 외부 배관의 열손실을 고려해야 합니다. 이 때 배관 단열재의 열전도율은 최소 0.04 W/mK, 두께는 50 mm 로 가정합니다.
<div align="center">$$
Q_{vc,d} = 0 \quad \text{(분배가 건물 내부에서 이루어질 때)}
$$</div>

<div align="center">$$
Q_{vc,d} = f_{vc,d} \cdot A_{K,A} \cdot t_{C^*,op,mth} \quad \text{(분배가 건물 외부에서 이루어질 때)}
$$</div>

- <div align="center">
$$
f_{vc,d} = 9\ \mathrm{W/m^2}
$$</div>


**- 누기 손실**: 급기 온도가 실내 목표 온도보다 크게 낮지 않으면 (-10 K 이내) 덕트 누기는 고려하지 않습니다. 중앙 공조 장치의 설계 풍량은 누기를 무시하고 각 존의 요구 풍량을 합산하여 산정합니다.

### 2.2.1.2. 공조기기 냉각 유닛의 가동시간
공조기기 냉각 유닛의 월별 가동시간은 연간 가동시간으로부터 산정됩니다. 
<div align="center">$$
t_{C^*,op,mth} = t_{C,r} \cdot \frac{b_{VC^*,mth}}{b_{VC^*,a}}
$$</div>

<div align="center">$$
b_{VC^*,mth} = \frac{Q_{vc^*,b}}{\dot{Q}_{C^*,max}}
$$</div>

<div align="center">$$
b_{VC^*,a} = \sum_{m=1}^{12} b_{VC^*,mth}
$$</div>

- \( t_{C,r} \): 냉각 유닛 연간 가동시간 (#.#.# 실내 냉방 요구량 파트에서 가져옴)  
- \( b_{VC^*} \): 냉방공조 전체 가동시간 (월별, 연간)


---

## 2.2.3. 냉열 생산기기의 제어, 전달, 분배, 저장:
### 2.2.3.1. 개요
공조기기의 냉각유닛과 실내냉방 시스템의 냉열 공급량은 각각 분리되어 산정되고 (2.2.3.1, 2.2.3.2), 합산하여 냉열 생산기기와 분배 시스템의 소요량을 계산합니다.

### 2.2.3.2. 공조기기 냉열 공급량(\(Q_{c*,outg}\)) 
2.2.2의 공조 냉각 유닛의 냉열 요구량(\(Q_{c*,b}\))과 생산기기로부터 전달, 분배 및 저장 과정의 손실을 합산하여 산정합니다.
<div align="center">$$
Q_{c^*,outg} = Q_{c^*,b} + Q_{c^*,ce} + Q_{c^*,d} + Q_{c^*,s}
$$</div>


**- 전달 손실(\(Q_{c*,ce}\))**:
<div align="center">$$
Q_{c^*,ce} = \left[\left(1 - \eta_{c^*,ce}\right) + \left(1 - \eta_{c^*,ce,sens}\right)\right] \cdot Q_{c^*,b}
$$</div>

- \( \eta_{c^*,ce} \): 공조기기의 냉열전달효율
- \( \eta_{c^*,ce,sens} \): 공조기기의 냉열 중 현열전달효율. 의도하지 않은 제습을 포함하며, #.#.#의 공조처리에너지요구량의 값에는 이 영향이 포함되지 않습니다.


**- 분배 손실(\(Q_{c*,d}\))**:
<div align="center">$$
Q_{c^*,d} = \left(1 - \eta_{c^*,d}\right) \cdot Q_{c^*,b}
$$</div>


**- 저장 손실(\(Q_{c*,s}\))**:
<div align="center">$$
Q_{c,s} = 0
$$</div>


- 냉방과 제습이 통합된 공조기기나 제습 기능이 있는 냉수 시스템 또는 실내기를 사용한 실내냉방 시스템에서 더 불리한 계수인 현열전달효율(\(η_{c*,ce,sens}\))은 외기 냉각을 위해 한 번 적용되어야 합니다. 실내냉방에서 현열전달효율(\(η_{c*,ce,sens}\))은 1을 적용해야 합니다.

<center>
     <div><strong>냉방 공조시설 계수 (연평균 값)</strong></div>
     <img src="../../_tables/2.2_2.png" style="max-width: 80%;" alt="냉방 공조시설 계수 (연평균 값)">
</center>

- 냉수 공급 온도가 중간 값일 경우 보간 값을 사용합니다.

### 2.2.3.2. 실내냉방 시스템 에너지 공급량(\(Q_{c,outg}\)) 
실내냉방 시스템의 에너지 공급량은 3.2.4절의 냉방 요구량(\(Q_{c,b}\))과 전달, 분배 및 저장 과정의 손실을 합하여 계산합니다.
<div align="center">$$
Q_{c,outg} = Q_{c,b} + Q_{c,ce} + Q_{c,d} + Q_{c,s}
$$</div>


**- 전달 손실(\(Q_{c,ce}\))**:
<div align="center">$$
Q_{c,ce} = \left[\left(1 - \eta_{c,ce}\right) + \left(1 - \eta_{c,ce,sens}\right)\right] \cdot Q_{c,b}
$$</div>


**- 분배 손실(\(Q_{c,d}\))**:
<div align="center">$$
Q_{c,d} = \left(1 - \eta_{c,d}\right) \cdot Q_{c,b}
$$</div>


**- 저장 손실(\(Q_{c,s}\))**:
<div align="center">$$
Q_{c,s} = 0
$$</div>

- <div align="center">
$$
\eta_{c,ce,sens} = 1 \quad \text{(실내냉방 시)}
$$</div>

<center>
     <div><strong>실내 냉방시설 계수 (연평균 값)</strong></div>
     <img src="../../_tables/2.2_3.png" style="max-width: 80%;" alt="실내 냉방시설 계수 (연평균 값)">
</center>


### 2.2.3.3. 실내 냉방을 위한 보조에너지 요구량
**- 팬 보조에너지 요구량(\(Q_{c,ce,aux}\))**: 실내 냉방 시스템의 팬 구동에 필요한 전력 요구량
<div align="center">$$
Q_{c,ce,aux} = \frac{f_{c,ce,aux} \cdot Q_{c,outg} \cdot t_{c,op}}{1000\ \mathrm{h}}
$$</div>

- \( f_{c,ce,aux} \): 팬의 에너지 소요량 계수
- \( t_{C,op} \): 실내 냉방 운전시간

<center>
     <div><strong>실내 냉방 팬의 단위 에너지 요구량 표준치</strong></div>
     <img src="../../_tables/2.2_4.png" style="max-width: 80%;" alt="실내 냉방 팬의 단위 에너지 요구량 표준치">
</center>



### 2.2.3.4. 냉각수 및 냉수 분배에 대한 보조에너지

<center>
     <div><strong>냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수</strong></div>
     <img src="../../_tables/2.2_5_1.png" style="max-width: 80%;" alt="냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수">
</center>
<center>
     <div><strong>냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수</strong></div>
     <img src="../../_tables/2.2_5_2.png" style="max-width: 80%;" alt="냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수">
</center>
<center>
     <div><strong>냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수</strong></div>
     <img src="../../_tables/2.2_5_3.png" style="max-width: 80%;" alt="냉각수 및 냉수망의 전기에너지 요구량에 대한 주요 매개변수">
</center>

<center>
     <img src="../../_images/image_2.2_4.png" style="max-width: 80%;" alt="냉각수 및 냉수 펌프 에너지 요구량 계산 과정">
     <div><strong>냉각수 및 냉수 펌프 에너지 요구량 계산 과정</strong></div>
</center>


**- 연간 전기에너지 소요량(\(Q_{Z,aux,d,a}\))**: 설정된 각 시간 주기 l(월 또는 년)에 대한 에너지 소요량의 합으로 계산합니다.
<div align="center">$$
Q_{Z,aux,d,a} = \sum_{l=1}^{n} Q_{Z,aux,d,l}
$$</div>


**- 주기별 전기에너지 소요량(\(Q_{Z,aux,d,l}\))**: 해당 주기의 수력학적 에너지 요구량(\(W_{d,hydr,l}\))과 분배 과정에서의 소비지수(\(e_{d,l}\))의 곱으로 계산합니다.
<div align="center">$$
Q_{Z,aux,d,l} = W_{d,\mathrm{hydr},l} \cdot e_{d,l}
$$</div>


**- 분배 과정 수력학적 에너지 요구량(\(W_{d,hydr,l}\))**: 펌프의 설계 조건에서의 수동력(\(P_{d,hydr}\)), 펌프 운전시간(\(t_{d,l}\)), 운전시간 동안의 평균 부하율(\(β_{d,l}\))로 산정합니다. 
<div align="center">$$
W_{d,\mathrm{hydr},l} = \left( \frac{P_{d,\mathrm{hydr}}}{1000} \right) \cdot t_{d,l} \cdot \beta_{d,l} \cdot f_{\mathrm{Abgl}}
$$</div>

- \(f_{Abgl}\) = 수력학적 보정계수

<div align="center">$$
P_{d,\mathrm{hydr}} = 1000 \cdot \Delta p_Z \cdot \left( \frac{\dot{V}_Z}{3600} \right)
$$</div>

- \(Δp_{Z}\) = 설계 조건에서 실내 전달 과정의 압력 손실


**- 설계 유량(\(\dot{V}_Z\))**: 설계 유량은 설계 조건에서의 냉각 용량(\(\dot{Q}_Z\))과 공급-환수 간 온도차(\(Δθ_{Z,cl}\)) 및 냉매 물성치로 산정합니다.
<div align="center">$$
\dot{V}_Z = \frac{3600 \cdot \dot{Q}_Z}{\Delta \theta_{Z,\mathrm{cl}} \cdot C_{\mathrm{cl}} \cdot \rho_{\mathrm{cl}}}
$$</div>

- \(c_{cl}\) = 냉매 비열
- \(ρ_{cl}\) = 냉매 밀도

수냉식 냉동기의 경우, 재냉각 용량은
<div>$$
\dot{Q}_z = \dot{Q}_{R,\mathrm{outz}}
$$</div>로 가정하고 아래 식으로 계산합니다.

<div align="center">$$
\dot{Q}_{c,\mathrm{outg}} + \left(1 + \frac{1}{\mathrm{EER}}\right)
$$</div>

흡수식 냉동기의 경우 EER 대신 정격 열 비율(ζ)를 사용합니다.
재냉각 순환에서 열 에너지는 아래 식으로 계산합니다.

<div align="center">$$
Q_Z = Q_{C,\mathrm{outg}} \cdot \left(1 + \frac{1}{\mathrm{SEER}}\right)
$$</div>
	
SEER = 증기압축 기반 냉동기기의 연간 냉각 에너지 효율

흡수식 냉동기의 경우 SEER 대신 정격 열 비율(\(ζ_{av}\))을 사용합니다.


#### 2.2.3.4.1. 압력 손실
**- 설계 조건에서 압력 손실(\(Δp_{Z}\))**: 설계 조건에서 압력손실은 배관망의 저항(개별 저항들 포함)과 추가적 저항의 함수로 정해집니다. 압력 손실은 가장 불리한 공급 배관이나 배관망에 연결된 소비기기 중 가장 불리한 기기에 의해 정해집니다. 시스템의 매개변수가 주어진 경우, 배관망은 자세한 계산 방법을 적용합니다. 대안으로, 근사법에서는 개별 저항의 현실적 추정값을 사용합니다.

<div align="center">$$
\Delta p_Z = R \cdot L_{\mathrm{max}} \cdot (1 + z) + \Delta p_{\mathrm{WUE}} + \Delta p_{\mathrm{RV}} + \Delta p_{\mathrm{WUV}}
$$</div>

- \(R\) = 배관 압력손실
- \(L_{max}\) = 분배망 중 최대 길이
- \(z\) = 배관 마찰 손실에서 개별 저항의 비율
- \(Δp_{WUE}\) = 생산기기에서 열교환기의 압력 손실
- \(Δp_{RV}\) = 제어밸브의 압력 손실
- \(Δp_{WUV}\) = 말단유닛 열교환기의 압력 손실


**- Δp - 근사치**: 각 구성요소에서 압력손실에 대한 근사치들은 해당 분배 사이클 설계에 따라 위 식에 사용해야 합니다. 제시된 값들은 계획단계에서 사용되는 가이드라인 값입니다. 기본적으로 목표 투자 및 운전 비용에 따라 설계 사양이 결정되며, 설계사양에 의해 최소 및 최대값이 정해집니다.
배관 압력손실은 분배망의 길이와 유형, 평균 유량, 배관 내부 표면의 매끄러움에 따라 달라집니다. 단위 길이 당 압력 손실 R과 개별 유동 저항의 추가적인 비율 z에 대한 근사값은 아래 표에 있습니다.

<center>
     <div><strong> 배관망에서 단위 길이당 압력 손실 R 및 개별 유동저항의 추가적인 비율 z</strong></div>
     <img src="../../_tables/2.2_6.png" style="max-width: 80%;" alt=" 배관망에서 단위 길이당 압력 손실 R 및 개별 유동저항의 추가적인 비율 z">
</center>


**- 냉수 분배 배관망 최대 길이(\(L_{max}\))**: 냉수 배관의 냉각 배관망, 1차 배관망, 분배 배관망에서 최대 길이는 냉각기 또는 열교환기 같은 냉열 생산기기와 냉열 소비 측의 방열기기 간 길이의 2 배의 함수로 정해집니다. 사각 형태 건물의 경우, 냉수 분배망의 최대 배관 길이는 외부 치수를 사용해서 대략적으로 아래와 같이 산정할 수 있습니다.
<div align="center">$$
L_{\mathrm{max}} = 2 \cdot \left( L + \frac{B}{2} + h_G \cdot n_G + 10 \right)
$$</div>

- \(L\) = 건물 길이
- \(B\) = 건물 폭
- \(h_{G}\) = 평균 층 높이
- \(n_{G}\) = 층 개수

<center>
     <div><strong>분배 배관망의 구성요소에 대한 압력 손실 추정값</strong></div>
     <img src="../../_tables/2.2_7.png" style="max-width: 80%;" alt=" 분배 배관망의 구성요소에 대한 압력 손실 추정값">
</center>



**- 연속감압밸브의 압력손실(\(Δp_{RV,stetig}\))**: 밸브 authority(\(a\))와 말단 유닛 열교환기의 압력손실(\(Δp_{WUV}\))을 이용하여 계산합니다. 
<div align="center">$$
\Delta p_{\mathrm{RV,stetig}} = \left( \frac{1 - a}{a} \right) \cdot \Delta p_{\mathrm{WUV}}
$$</div>

표에서 가정된 압력 손실 값들은 물 온도 10 °C 및 동점성계수 <div>$$
\nu \approx 1{,}5\ \mathrm{mm^2/s}$$</div>에서 유효합니다. 만약 동점성계수 > 4 ㎟/s인 냉매나 ice slurry를 사용하면, 배관망과 열교환기의 압력 손실은 분리해서 산정해야 합니다. 배관 균형을 위한 제어 밸브의 압력 손실 계산은 상세  설계 과정에서만 가능합니다.


#### 2.2.3.4.2. 펌프 운전시간
**- 펌프 운전시간(\(t_{d,l}\))**: 공조기기에서 공기 냉각에 필요한 운전시간과 냉열 생산기기와 같이 운전되는 펌프의 운전 시간은 각 사용기기/존에 대해 월별 값으로 정해집니다. 냉방 존에서 펌프의 운전 시간은 시스템 설계 컨셉에 따라 정해지며, 산정된 존의 냉방 요구 시간을 초과할 수 있습니다. 여러 사용기기/존이 하나의 분배 배관망을 공유할 경우, 펌프의 운전 시간은 최대 운전 시간을 갖는 존을 기준으로 정해집니다.

<center>
     <div><strong>운전 모드</strong></div>
     <img src="../../_tables/2.2_8.png" style="max-width: 80%;" alt="운전 모드">
</center>


#### 2.2.3.4.3. 평균 부하율
**- 분배 과정의 평균 부하율(\(β_{d,l}\))**: 분배 과정의 평균 부하율은 설계 조건의 냉각 용량(\( \dot{Q}_Z \)), 존의 냉방 에너지 요구량(\(Q_{Z,outg,l}\)) 및 각 기간 내의 작동 시간(\(t_{d,l}\))을 기반으로 시스템의 모든 펌프 분배망 또는 존에 대해 계산됩니다.
<div align="center">$$
\beta_{d,l} = \frac{Q_{Z,\mathrm{outg},l}}{\dot{Q}_Z \cdot t_{d,l}}
$$</div>

**- 초과 유량 장치 보정**: 분배 배관망에 초과 유량 장치(밸브, 배관 등)가 설치된 경우, 평균 수력학적 요구량에 미치는 영향은 아래 식으로 산정된다.
<div align="center">$$
\beta_{d,l} = \beta'_{d,l} + \left(1 - \beta'_{d,l}\right) \cdot \left( \frac{\dot{V}_{Z,\mathrm{min}}}{\dot{V}_Z} \right)
$$</div>

- \(β'_{d,l}\)은 평균 부하에 의해 결정된다.
- \(V_{dot_Z,min}\) = 분배망에서 최소 유량

최소 유량은 냉방 존 또는 소비기기의 배관망에 있는 과압 방출 밸브의 요구 사항을 기반으로 산정해야 합니다.

- 1차 배관망의 수력학적 분리 또는 소비기기에서 전환 밸브를 사용할 경우, 관련된 공급 펌프에서
<div align="center">$$
\beta_{d,l} = 1
$$</div>을 적용할 수 있습니다.  

**- 수력학적 평형 보정계수(\(f_{Abgl}\))**:
**수력학적 평형을 이룬 배관망**: \(f_{Abgl}\) = 1.0
**수력학적 평형을 이루지 않은 배관망**: \(f_{Abgl}\) = 1.25


#### 2.2.3.5.4 소비지수
**- 소비지수(\(e_{d,l}\))**: 시스템에 설치된 펌프의 운전은 주어진 기간 동안 냉수 분배를 위한 소비지수를 사용하여 평가한다.
<div align="center">$$
e_{d,l} = f_e \cdot \left( c_{p1} + c_{p2} \cdot \beta_{d,l}^{-1} \right)
$$</div>

\(f_{e}\) = 펌프 효율계수
\(c_{p1}\), \(c_{p2}\) = 펌프 운전방식에 따른 상수

**- 펌프 효율계수(\(f_{e}\))**: 펌프의 총 효율(펌프의 수력학적 효율과 모터 효율의 곱)이다.
**설계점(design point)에서 펌프의 전력 성능이 있는 경우**:
<div align="center">$$
f_e = \frac{P_{\mathrm{pumpe}}}{P_{\mathrm{hydr}}}
$$</div>

**데이터가 없는 경우(근사식)**:
<div align="center">$$
f_e = \left(1.25 + \sqrt{ \frac{200}{P_{d,\mathrm{hydr}}} } \right) \cdot f_{\mathrm{Adap}} \cdot b
$$</div>

- \(f_{Adap}\) = 펌프 운전점에 대한 적응 보정계수
- \(b\) = 건물 범주에 따른 평가계수(기존 건물 = 1.2, 신축 = 1.0)
근사치는 아래 상황에서 유효합니다.

방사형 원심 펌프 (Radial centrifugal pump)(펌프 정격 설계점에서 효율 등급 1의 모터를 사용하는 경우. 정격 설계점에서 운전하지 않거나 수력학적 부분과 모터가 일치하지 않으면 \(f_{e}\) 값은 상승합니다.)

최대 압력차가 아래와 같을 때
Δp ≤ 0.6 bar (\(P_{hydr}\) < 0.2 kW)
Δp ≤ 1.5 bar (0.2 < \(P_{hydr}\) < 0.5 kW)
Δp ≤ 4.0 bar (\(P_{hydr}\) > 0.5 kW)

- 물 온도 20 °C

**고점성 냉매 사용 시 보정**: 동점성계수(\(ν_{cl}\))가 4 ㎟/s를 초과하는 냉매를 사용하는 경우, 위의 근사식(\(f’_{e}\))을 아래 식으로 보정합니다.
<div align="center">$$
f_e = f'_e \cdot \left( 1 + \left( \frac{\nu_{\mathrm{cl}}^2}{16 \cdot P_{d,\mathrm{hydr}}} \right)^{0.4} \right)
$$</div>


**- 적응 보정계수(\(f_{Adap}\))**: 펌프가 설계점과 비교해서 운전점에서 얼마나 최적의 성능을 내는지를 보정하는 계수입니다.

**성능이 알려진/최적으로 조정된 펌프**: \(f_{Adap}\) = 1.0

**성능을 모르는 경우**:
- 표준 펌프: \(f_{Adap}\) = 1.2
- 속도 제어 펌프: \(f_{Adap}\) = 1.05

**- 운전 상태에서 펌프 동력 조절**: 변유량 분배 배관망의 수력학적 요구에 맞춰 펌프 동력을 조절하여 에너지요구량을 상당히 절감할 수 있습니다. 펌프의 동력 조절은 아래와 같습니다.

- 내회전속도 제어
- 외회전속도 제어
- 병렬 펌프 운전 시 (이중 펌프 등) 부분 정지 

펌프의 제어 방식(비제어/제어)에 따라 소비지수 계산에 사용되는 상수(\(c_{p1}\), \(c_{p2}\))가 결정됩니다.

<center>
     <div><strong>펌프 운전방식에 따른 상수 \(c_{p1}\), \(c_{p2}\)</strong></div>
     <img src="../../_tables/2.2_9.png" style="max-width: 80%;" alt=" 펌프 운전방식에 따른 상수 C_p1, C_p2">
</center>


**- 병렬 펌프에서 펌프 전환**: 완만한 시스템 특성 곡선을 갖는 변유량 분배 배관망에서 병렬 펌프 중 개별 펌프를 on/off 전환 운전할 경우, 에너지 소비를 상당히 절감할 수 있습니다. 분배망의 부하율(\(β_{d}\))이 0.7 이하인 경우, 병렬 펌프 전환에 의한 유량 적응 운전에 대한 소비지수는 위 표의 \(c_{p1}\), \(c_{p2}\) 값을 사용하여 산정할 수 있습니다.


---

## 2.2.4. 냉열 생산에 대한 2차 에너지 요구량
냉열 생산의 2차 에너지 요구량은 냉동기의 종류, 사용 냉매, 제어 방식, 운전 온도 및 건물 용도 등 다양한 기술적 특성치에 근거하여 산정됩니다. 본 절에서는 냉열 생산 시스템의 2차 에너지 요구량을 산정하는 것을 목표로 합니다. 냉열 생산 시스템의 종류는 다음 표를 참고합니다.
<center>
     <img src="../../_tables/3.2.8_15.png" style="max-width: 80%;" alt="배관의 열관류율">
     <div><strong>배관의 열관류율 \(U_{i}\)</strong></div>
</center>

**- 냉동기의 냉열 공급량**: 하나의 냉동기와 연결된 존들을 하나의 냉열 공급영역으로 볼 수 있으며, 한 냉열 공급영역 내에 다양한 용도프로필을 가진 존들이 포함될 수 있습니다. 또한 한 건물의 존 내에서 공조 시스템 또는 실내냉방 시스템으로 구분할 수 있습니다. 조닝 판단의 기준을 위해 다음 표를 참고합니다. 
<center>
     <img src="../../_tables/3.2.8_16.png" style="max-width: 80%;" alt="냉열공급을 위한 조닝">
     <div><strong>냉열공급을 위한 조닝</strong></div>
</center>

한 냉동기가 각 시스템의 냉각 유닛에 공급하는 연간 냉열 공급량은 각 용도 종류 (n) (3.2.2 절참고)로 나누어 계산합니다. 공조 시스템과 실내냉방 시스템에 공급된 월별 냉열 공급량을 연간으로 합산하여 냉동기의 연간 총 냉열 공급량을 산정합니다.
<div align="center">$$
Q_{C,\mathrm{outg},a,n} = Q_{c,\mathrm{outg},a,n} + Q_{c^*,\mathrm{outg},a,n} = 
\sum_{j=1}^{n} \left( \sum_{m=1}^{12} Q_{c,\mathrm{outg},mth,j} + \sum_{m=1}^{12} Q_{c^*,\mathrm{outg},mth,j} \right)
$$</div>


**- 냉동기 총 연간 냉열 공급량(\(Q_{C,outg,a}\))**: 해당 냉동기가 담당하는 모든 용도(n)의 연간 냉열 공급량을 합산합니다.
<div align="center">$$
Q_{C,\mathrm{outg},a} = \sum_{n} Q_{C,\mathrm{outg},a,n}
$$</div>


**- 압축식 냉동기의 2차 에너지**
**연간 에너지성능지수 (SEER)**:
<div align="center">$$
\mathrm{EER} \cdot \mathrm{PLV}_{\mathrm{av}} = \mathrm{SEER} = \frac{Q_{C,\mathrm{outg},a}}{Q_{C,f,\mathrm{elektr}}}
$$</div>

EER = 에너지 성능지수 (Energy efficiency ratio)
- \(PLV_{av}\) = 평균 부분부하율
- \(Q_{C,f,elektr}\) = 압축식 냉동기의 2차 에너지 요구량

<div align="center">$$
Q_{C,f,\mathrm{elektr}} = \frac{Q_{C,\mathrm{outg},a}}{\mathrm{SEER}} = \frac{Q_{C,\mathrm{outg},a}}{\mathrm{EER} \cdot \mathrm{PLV}_{\mathrm{av}}}
$$</div>

**에너지성능지수(EER)**: 정격 냉각 성능(\( \dot{Q}_{C,\text{outg}} \))을 전기적 정격 동력(\(P_{C,elektr}\))으로 나눈 값입니다.
<div align="center">$$
\mathrm{EER} = \frac{\dot{Q}_{C,\mathrm{outg}}}{P_{C,\mathrm{elektr}}}
$$</div>

**평균 부분부하율(\(PLV_{av}\))**: 냉동기의 성능은 부분부하에 따라 변하며, 부분부하율은 냉동기의 실질 부분부하, 냉각수 온도, 외기온도 영향, 부분 부하에서 불일치하는 열교환기의 영향을 고려합니다. 한 용도 당 하나의 실내냉방 시스템 또는 HVAC 시스템만 사용된다면, 부분부하율 \(PLV_{av}\)를 직접적으로 에너지 평가에 사용할 수 있습니다.
<div align="center">$$
\mathrm{PLV}_{\mathrm{av},n} = \frac{Q_{c,\mathrm{outg},a,n} \cdot \mathrm{PLV}_{\mathrm{av}} + Q_{c^*,\mathrm{outg},a,n} \cdot \mathrm{PLV}_{\mathrm{av}}}{Q_{C,\mathrm{outg},a,n}}
$$</div>

냉열 공급영역에 여러 용도가 있을 경우, 각 용도별 냉열 공급량에 따라 평균하여 전체 시스템의 평균 부분부하율을 산정합니다.
<div align="center">$$
\mathrm{PLV}_{\mathrm{av}} = \frac{ \sum_{n=1}^{N} \left( Q_{C,\mathrm{outg},a,n} \cdot \mathrm{PLV}_{\mathrm{av},n} \right) }{ Q_{C,\mathrm{outg},a} }
$$</div>



### 2.2.4.1. 수냉식 증기압축 냉동기(Water-cooled chiller)
**- 제어 방식**: 특성치-방법에서는 다음 표에서 제시된 압축기 유형 및 제어 방식을 고려합니다.
<center>
     <img src="../../_tables/3.2.8_17.png" style="max-width: 80%;" alt="특성치-방법에 있어 수냉식 압축냉동기에 대한 부분부하제어의 종류">
     <div><strong>특성치-방법에 있어 수냉식 압축냉동기에 대한 부분부하제어의 종류</strong></div>
</center>

**- 에너지성능계수(EER) 표준값**: 수냉식 압축 냉동기의 EER은 다음 표에 제시된 표준값을 사용합니다.
<center>
     <img src="../../_tables/3.2.8_18.png" style="max-width: 80%;" alt="수냉식 압축냉동기에 대한 에너지성능계수 EER 표준값">
     <div><strong>수냉식 압축냉동기에 대한 에너지성능계수 EER 표준값</strong></div>
</center>

주어진 EER 값은 오염 계수 0.044 m²K/kW를 전제 조건으로 합니다.
EER 값은 사용된 **냉매** 종류(R134a, R407C 등)에 따라 선택해야 하며, 정보가 없을 경우 R134a를 적용합니다.

**냉각수 온도**는 재냉각 방식에 맞추어 선택합니다 (건식 냉각기: 40/45℃, 증발식 재냉각기: 27/32℃).

**사용 온도 수위**는 냉동기(간접/직접 시스템)에 따라 간접 시스템(수냉동기)의 경우 냉수 출구 온도로, 직접 시스템(직접 증기시설)의 경우 평균 증발 온도를 매개변수로 이용해 해석합니다.

**- 평균 연간 부분부하율(\(PLV_{av}\))**: 건물 용도, 냉열 이용 종류(실내냉방/공조), 그리고 냉각수 제어 방식(불변/가변)에 따라 결정됩니다.

- 건물의 용도프로필에 따라 Annex 1 표의 부분부하율 값을 사용합니다. 일치하는 용도프로필이 없으면 개인사무실(용도1)을 사용합니다.
- 여러 용도가 혼합된 경우, 가중 평균을 계산합니다.
- 실내 냉방과 공조 시스템이 병행될 경우, 각 시스템의 공급량 비율에 따라 계산합니다.
- 냉각수 제어 방식에 따라 부분부하율은 바뀝니다. Annex A의 건물 용도별 부분 부하율은 증발식 재냉각기의 경우 27 ℃, 건식 재냉각기의 경우 40 ℃로 제어되는 냉각수 입구 온도를 고려합니다(Table A.2 ~ A.15 왼쪽 열, cooling-water input to refrigeration unit constant 참조). 만약 외기 조건이 설계 조건보다 낮다면, 냉각 에너지요구량은 유입 냉각수 온도가 낮아짐에 따라 감소합니다(부분 부하율 상승). 가변 냉각수 유입 온도에 대한 부분부하율 값(Table A.2 ~ A.15 오른쪽 열, cooling-water input to refrigeration unit variable 참조)은 단단(single-stage) 흡수식 냉각기의 경우 장치별 최소 냉각수 출구 온도 20 ℃를 고려합니다.


### 2.2.4.2. 공랭식 증기압축 냉동기(Air-cooled chiller)
**- 제어 방식**: 특성치-방법에서는 다음 표에서 제시된 압축기 유형 및 제어 방식을 고려합니다.
<center>
     <img src="../../_tables/3.2.8_19.png" style="max-width: 80%;" alt="특성치-방법에 있어 공냉식 압축냉동기에 대한 부분부하제어의 종류">
     <div><strong>특성치-방법에 있어 공냉식 압축냉동기에 대한 부분부하제어의 종류</strong></div>
</center>

**- 에너지성능계수(EER) 표준값**: 공랭식 압축 냉동기의 EER은 압축기 방식에 따라 다음 표의 표준값을 선택합니다.
<center>
     <img src="../../_tables/3.2.8_20.png" style="max-width: 80%;" alt="공랭식 압축냉동기에 대한 에너지성능계수 EER 표준값">
     <div><strong>공랭식 압축냉동기에 대한 에너지성능계수 EER 표준값</strong></div>
</center>

- EER 표준값은 외기 온도 32℃(습구 온도 21℃), 오염 계수 \(0.044 m^2\)를 기준으로 유효합니다. 압축기 유형을 모르는 경우, 통상적인 능률 범위를 기준으로 결정합니다.

- 사용하는 냉매 유형을 모르는 경우, R134의 값을 사용합니다. R22는 오직 기존 시스템의 에너지 성능 평가에만 사용됩니다.

- 공랭식 냉동기의 EER 값에는 재냉각 팬의 전기에너지와 같은 보조에너지가 이미 포함되어 있습니다.

- 사용온도수위는 사용된 설계, 소비기기 제어, 방출 기술에 따라 결정됩니다. 간접 시스템(수냉식)의 경우 냉수 출구 온도가, 직접 시스템(직접 증발 시스템)의 경우 평균 증발 온도가 설계 매개변수로 적용됩니다. 조건이 다른 경우, 보간법을 통해 중간값을 얻을 수 있습니다.

- 공랭식 냉동기의 EER은 모든 시스템 내부 보조에너지 요구량을 포함합니다.



**- 평균 연간 부분부하율(\(PLV_{av}\))**: 건물 용도와 냉열 이용 종류를 고려하여 평균 부분부하율 계산 식에 따라 결정됩니다. 용도프로필에 따라 Annex A 표의 부분부하율 값을 사용합니다. 일치하는 용도프로필이 없으면 개인사무실(용도1)을 사용합니다.


### 2.2.4.3. 공랭식 실내냉방시스템(Air-cooled room air conditioning system)
**- 제어 방식**: 특성치-방법에서는 다음 표에서 제시된 부분 부하 제어 방식을 고려합니다.
<center>
     <img src="../../_tables/3.2.8_21.png" style="max-width: 80%;" alt="특성치-방법에 있어 공냉식 실내냉방시스템에 대한 부분부하제어의 종류">
     <div><strong>특성치-방법에 있어 공냉식 실내냉방시스템에 대한 부분부하제어의 종류</strong></div>
</center>

**- 에너지성능계수(EER) 표준값**: 시스템의 종류에 따라 아래 두 표에 제시된 표준값(에너지효율등급 D에 해당)을 사용해야 하며, 제품 사양 값의 사용은 허용되지 않습니다. 이는 에너지 표시를 하지 않는 냉동기 시스템과의 비교를 위해서입니다.
주어진 값은 외기 온도 32℃(습구 온도 21℃)와 실내 온도 26℃(습구 온도 19℃) 조건에서 유효합니다.

<center>
     <img src="../../_tables/3.2.8_22.png" style="max-width: 80%;" alt="12kW 이하의 공냉식 실내냉방시스템에 대한 에너지성능지수 EER">
     <div><strong>12kW 이하의 공냉식 실내냉방시스템에 대한 에너지성능지수 EER</strong></div>
</center>
<center>
     <img src="../../_tables/3.2.8_23.png" style="max-width: 80%;" alt="12kW 이상의 공냉식 실-공조시스템에 대한 에너지성능계수 EER">
     <div><strong>12kW 이상의 공냉식 실-공조시스템에 대한 에너지성능계수 EER</strong></div>
</center>

**- 평균 연간 부분부하율(\(PLV_{av}\))**: 건물 용도 프로필에 따라 선택되며, 여러 용도가 혼합된 경우 가중 평균을 계산합니다. 용도프로필에 따라 Annex A 표의 부분부하율 값을 사용합니다. 일치하는 용도프로필이 없으면 개인사무실 (용도1)을 사용합니다.

---

## 2.2.5. 흡수식 냉동기에 공급되는 열에너지
**개요**: 흡수식 냉동기 작동에 요구되는 열 생산기기의 열 공급량을 계산합니다. 흡수식 냉동기의 에너지 평가는 정격 열성능비(ζ)와 평균 부분부하율(\(PLV_{av}\))을 기반으로 하며, 1중 효용 H2O/LiBr 흡수식 냉동기에 한하여 다룹니다.

**- 연간 평균 열성능비(\(ζ_{av}\))**: 정격 열성능비(ζ)와 평균 부분부하율(\(PLV_{av}\))의 곱으로 계산됩니다.
<div align="center">$$
\zeta_{\mathrm{av}} = \zeta \cdot \mathrm{PLV}_{\mathrm{av}} = \frac{Q_{C,\mathrm{outg},a}}{Q_{C,\mathrm{outg},\mathrm{therm}}}
$$</div>


**- 열 생산기기 열에너지 공급량(\(Q_{C,outg,therm}\))**: 냉동기의 연간 냉열 공급량(\(Q_{C,outg,a}\))을 연간 평균 열성능비(\(ζ_{av}\))로 나누어 계산합니다.
<div align="center">$$
Q_{C,\mathrm{outg},\mathrm{therm}} = \frac{Q_{C,\mathrm{outg},a}}{\zeta \cdot \mathrm{PLV}_{\mathrm{av}}}
$$</div>


**- 정격 열성능비(ζ)**: 정격 냉열 성능(\( \dot{Q}_{C,\text{outg}} \))을 정격 가열 성능(\( \dot{Q}_{C,\text{therm}} \))으로 나눕니다.
<div align="center">$$
\zeta = \frac{\dot{Q}_{C,\mathrm{outg}}}{\dot{Q}_{C,\mathrm{therm}}}
$$</div>

- 제품에 따라 다양한 정격 열성능비가 있으나 특성치 방법에서는 아래 표에 주어진 표준값만 사용합니다. 빈 칸은 시스템의 조건이 허용되지 않는 것입니다. 표의 값은 오염 계수 \(0.044 m^2K/kW\)에서 유효합니다.

<center>
     <img src="../../_tables/3.2.8_25.png" style="max-width: 80%;" alt="열성능비">
     <div><strong>열성능비</strong></div>
</center>

- 열 성능비는 사용가능한 평균 가열매체 온도에 따라 선택하며 중간값은 보간하여 얻습니다.

- 냉각수 온도는 재냉각 유형에 따라 선택합니다. 냉각수 입구/출구 온도는 건식 냉각기의 경우 40/45 ℃ (글리콜 비율 30 %)로, 증발식 재냉각기의 경우 27/33 ℃로 가정합니다.

- 사용온도수위는 수냉식 냉동기와 같은 방법으로 해석합니다.



**- 평균 연간 부분부하율(\(PLV_{av}\))의 결정**:
건물 용도 프로필, 냉열 이용 종류(실내냉방/공조), 그리고 냉각수 제어 방식(불변/가변)을 고려하여 Annex A의 표에서 부분부하율 값을 결정합니다.

여러 용도가 혼합된 경우, 각 용도별 냉열 공급량의 비중을 고려하여 가중 평균을 계산합니다.

실내 냉방과 공조 시스템이 병행될 경우, 아래 식에 따라 각 시스템의 공급량 비중을 고려합니다.

<div align="center">$$
PLV_{\text{av},n} = \frac{ Q_{c,\text{outg},a,n} \cdot PLV_{\text{av}} + Q_{c^*,\text{outg},a,n} \cdot PLV_{\text{av}} }{ Q_{C,\text{outg},a,n} }
$$</div>


**- 연계 변수(Interfacing Variables)**:
**월별 열 공급량(\(Q_{C,outg,therm,mth}\))**: 연간으로 계산된 총 열 공급량(\(Q_{C,outg,therm,a}\))은 월별 냉열 공급량의 비율에 따라 배분되어 난방 시스템 모듈(제 7장)로 전달됩니다

<div align="center">$$
Q_{C,\mathrm{outg},\mathrm{therm},\mathrm{mth}} = Q_{C,\mathrm{outg},\mathrm{therm},a} \cdot \left( \frac{Q_{C,\mathrm{outg},\mathrm{mth}}}{Q_{C,\mathrm{outg},a}} \right) 
$$</div>

**정격 가열 성능(\( \dot{Q}_{C,\text{therm}} \))**: 온수 열매체 난방배관망인 경우 흡수식 냉동기를 구동하는 열 생산 기기(보일러 등)의 총 열 생산량을 산정하기 위해 #2.1절 난방 시스템 에너지 산정

<div align="center">$$
\dot{Q}_{C,\mathrm{therm}} = \frac{\dot{Q}_{C,\mathrm{outg}}}{\zeta}
$$</div>


---

## 2.2.6. 재냉각 에너지 소요량 (Energy use)
**개요**: 재냉각의 에너지 평가는 재냉각기의 기기 구성 특징에 바탕을 둔 전기에너지 요구량(\(q_{R,elektr}\))과 평균 이용률(\(f_{R,av}\))을 기반으로 합니다.

**- 재냉각의 2차 에너지 소요량 (\(Q_{C,f,R,elektr}\))**:
<div align="center">$$
Q_{C,f,R,\mathrm{elektr}} = \dot{Q}_{R,\mathrm{outg}} \cdot q_{R,\mathrm{elektr}} \cdot f_{R,\mathrm{av}} \cdot t_{R,\mathrm{op}}
$$</div>
<p align="center">Q̇<sub>R,outg</sub>: 정격 재냉각 성능 [kW]</p>

<div align="center">$$
\dot{Q}_{R,\mathrm{outg}} = \dot{Q}_{c,\mathrm{outg}} \cdot \left(1 + \frac{1}{\mathrm{EER}} \right)
$$</div>
<p align="center">압축식 냉동기</p>

<div align="center">$$
\dot{Q}_{R,\mathrm{outg}} = \dot{Q}_{c,\mathrm{outg}} \cdot \left(1 + \frac{1}{\zeta} \right)
$$</div>
<p align="center">흡수식 냉동기</p>


\(q_{R,electr}\): 재냉각기의 고유 전기에너지 요구량 [kW/kW] <아래 표 참고>
<center>
     <img src="../../_tables/3.2.8_26.png" style="max-width: 80%;" alt="재냉각기의 고유 전기에너지요구량">
     <div><strong>재냉각기의 고유 전기에너지요구량 \(q_{R,elektr}\)</strong></div>
</center>

\(f_{R,av}\): 재냉각의 평균 사용 계수
\(t_{R,op}\): 재냉각 가동 시간 [h]

**- 재냉각의 평균 사용 계수 (\(f_{R,av}\))**: 평균 사용 계수 \(f_{R,av}\)는 Annex A 표에서 증발식 재냉각기의 경우 \(f_{R,VK}\)(개방/밀폐형 망 둘 다 적용가능)와, 건식 재냉각 시스템의 경우 동일 표에서 건물 용도 유형별 \(f_{R,TK}\)와 일치합니다. 재냉각에 대한 특성치는 냉각수 온도 제어 모드와 연관되어 선택되며, 냉동기의 부분부하율과 연계됩니다.


<div align="center">$$
f_{R,\mathrm{av},n} = \frac{Q_{c,\mathrm{outg},a,n} \cdot f_{R,\mathrm{av}} + Q_{c^*,\mathrm{outg},a,n} \cdot f_{R,\mathrm{av}}}{Q_{C,\mathrm{outg},a}}
$$</div>

여러 용도가 혼합된 경우, 각 용도별 연간 냉열 공급량의 비중을 고려하여 평균 이용률을 계산합니다.
<div align="center">$$
f_{R,\mathrm{av}} = \sum_{n=1}^{N} \left( \frac{Q_{C,\mathrm{outg},a,n} \cdot f_{R,\mathrm{av},n}}{Q_{C,\mathrm{outg},a}} \right)
$$</div>


**- 재냉각 가동시간 (\(t_{R,op}\))**: 용도에 따른 공조 냉각 유닛과 실내냉방 시스템의 월간 요구시간의 연간 합 중 최대값을 선택합니다.
<div align="center">$$
t_{R,\mathrm{op},n} = \max \left( \sum_{m=1}^{12} t_{c^*,\mathrm{op},mth},\ \sum_{m=1}^{12} t_{c,\mathrm{op},mth,n} \right)
$$</div>

여러 용도가 혼합된 경우, 각 용도에 대한 \(t_{R,op,n}\) 값들 중 최대값을 요구시간으로 정합니다.
<div align="center">$$
t_{R,\mathrm{op}} = \max \left( t_{R,\mathrm{op},n} \right)
$$</div>


**- 다른 장과 연계되는 변수**:
재냉각 시스템의 전기 에너지소요량 \(Q_{C,f,R,elecktr}\)은 연간 합으로써 제 2.7장의 1차 에너지소요량 계산에 사용됩니다.


**- 냉각과 분배를 위한 에너지소요량의 구성요소**


&nbsp;&nbsp;&nbsp;&nbsp;직접/간접 냉각 시스템에서, 전체 냉방 시스템의 에너지 평가를 위해서는 생산, 분배, 전달 과정에서 발생하는 모든 에너지소요량을 고려해야 합니다. 시스템의 종류(간접/직접)에 따라 고려해야 할 항목이 다르며, 이는 아래 두 표를 참고합니다.

<center>
     <img src="../../_tables/3.2.8_27.png" style="max-width: 80%;" alt="간접 시스템(수냉각기)의 에너지평가를 위한 요구량">
     <div><strong>간접 시스템(수냉각기)의 에너지평가를 위한 요구량</strong></div>
</center>
<center>
     <img src="../../_tables/3.2.8_28.png" style="max-width: 80%;" alt="직접 시스템의 에너지평가를 위한 요구량 (직접 증발기)">
     <div><strong>직접 시스템의 에너지평가를 위한 요구량 (직접 증발기)</strong></div>
</center>





---

## 2.2.7. 에너지소요량 (Energy use)
### 2.2.7.1. 냉열생산기 (냉동기)
**- 압축식 냉동기에 대한 전력**: 압축식 냉동기에 대한 연간 전력량은 8.4.1절에 따라 모든 냉열 공급 단위의 합으로 계산됩니다.
<div align="center">$$
Q_{c,f,j,\mathrm{elektr}} = \sum Q_{c,f}
$$</div>

특성치-방법에서는 생산 손실을 특성치에 포함하므로
<div>$$
Q_{c,g} = Q_{c^*,g} = 0
$$</div> 입니다.

냉열 생산에 적용된 재생 가능한 에너지 비율은 아래와 같이 계산됩니다.
<div align="center">$$
Q_{c,\mathrm{reg}} = Q_{c,\mathrm{outg}} - Q_{c,f}
$$</div>


**- 흡수식 냉동기에 대한 증기**:
110℃ 이하 온도에서 필요한 열에너지는 #.에 따라 계산됩니다.
<div align="center">$$
Q_{c,f,j,\mathrm{therm}} = Q_{c,f}
$$</div>

이때 사용되는 증기는 1차 에너지 측면에서 지역난방열과 동일하게 취급됩니다.

### 2.2.7.2. 냉방시설과 냉동기에 대한 보조에너지
- 냉방 시설 및 냉동기 가동에 필요한 연간 총 보조에너지는 실내 냉방 시스템과 공조 시스템을 위한 모든 설비의 보조에너지 합으로 계산됩니다.
<div align="center">
$$
Q_{C,\mathrm{max}} = \sum Q_{c^*,\mathrm{aux},a} + \sum Q_{c,\mathrm{aux},a} = 
\sum Q_{c,\mathrm{ce},\mathrm{aux},a} + \sum Q_{Z,\mathrm{aux},d,a} + \sum Q_{\mathrm{hr},f,\mathrm{aux},a} + \sum Q_{\mathrm{mh},f,\mathrm{aux},a} + \sum Q_{C,f,R,\mathrm{elektrisch}}
$$</div>

- 증기 생산을 위한 보조에너지는 고려하지 않습니다.
<div align="center">
$$
Q_{m^*,\text{aux}} = 0
$$</div>
