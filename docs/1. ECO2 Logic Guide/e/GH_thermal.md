# 3.3. 지열 및 수열 에너지생산량

지열 및 수열 히트펌프 시스템은 주변 열원(지열, 수열 등)으로부터 저온의 열을 흡수하여 고온으로 전달하는 시스템입니다. 전기나 가스를 사용하여 난방 및 급탕을 위한 열을 생산합니다. 

## 3.3.1. 부분부하운전 성능지수 (COP)

성능 제어가 없는 히트펌프는 부분부하 운전 시 ON/OFF 방식으로 작동하여 압축기의 반복 작동으로 인한 에너지 손실과 성능지수(COP) 저하가 발생합니다. 반면, 단계적 또는 연속 제어가 가능한 히트펌프는 부분부하에서도 높은 효율을 유지할 수 있으며, 이를 정확히 평가하기 위해서는 최대부하에서의 성능지수 \(COP_{fl}\)와 함께 DIN CEN/TS 14825 기준에 따른 50% 부하 조건의 성능지수 \(COP_{pl}\)가 필요합니다.  

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( COP_{pl} = COP_{fl} \cdot f_{pl} \)
</a>


보정계수 \(f_{pl}\)은 분배시스템과 히트펌프의 열적 관성과 히트펌프의 가동시간(\(t_{ON,aux}\))을 고려하며, 가동시간은 부하계수 FC에 의해 고려됩니다. 히트펌프의 가동시간(\(t_{ON,aux}\))은 가동조건(열원온도와 난방 급수 및 회수온도)에 따른 난방부하와 열에너지요구량과 상관이 있으며, 열에너지요구량은 건물부하, 분배시스템과 내부부하와 상관이 있습니다.  

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( FC = \frac{t_{ON,g,i}}{t_i} \)
</a>

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( t_{ON,g,i} = \frac{Q_{h,outg,i}}{0.001 \cdot \Phi_{g,i}} \)
</a>


When,  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( t_{M,ON} \geq \sum_{T\text{-}Klasse} t_{ON,g,i} \)
</a>

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,outg,WP} = 0.001 \cdot t_{ON,g,i,WP} \cdot \Phi_{g,i} \)
</a>


## 3.3.2. 히트펌프의 에너지 생산량 계산

히트펌프의 에너지생산량은 히트펌프의 종류 (공기-물, 염수(브라인)-물, 물-물), 시스템 구성 (온수가열 및 가동방식), 주변조건 (기상데이터) 등의 입력데이터를 고려하여, 난방이나 급탕에 필요한 에너지를 생산하기 위해 요구되는 전력 또는 연료 형태의 에너지 (\(Q_{h,f}\)), 히트펌프의 전체 열손실 (\(Q_{h,g}\)), 히트펌프 운전에 필요한 보조에너지 (\(Q_{h,g,aux}\)), 히트펌프의 전체 회수 가능한 열 배출 (\(k_{rd,g} \cdot Q_{h,g,aux}\))이 계산됩니다.

- 히트펌프의 전력/연료 소비량 (\(Q_{h,f}\))
전기 구동식 히트펌프: 난방가동 시 히트펌프의 개별 등급의 전기에너지수용량의 합을 계산합니다.  
  <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,f,1} = \sum_{i=1}^{n_{bin}} \frac{Q_{h,outg,sin,i} + Q_{h,g,i} - (1 - P_{h,combi}) \cdot k_{rd,g} \cdot Q_{h,g,aux,i}}{COP_{sin,i}} + \sum_{i=1}^{n_{bin}} \frac{Q_{h,outg,combi,i} + Q_{h,g,i} - P_{h,combi} \cdot k_{rd,g} \cdot Q_{h,g,aux,i}}{COP_{combi,i}} \)
 </a>


가스 히트펌프: 각 등급에 대한 히트펌프의 연소원료 에너지의 양을 계산합니다.  
  <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,f,1} = \sum_{i=1}^{n_{bin}} \frac{Q_{h,outg,i} - k_{rd,g} \cdot Q_{h,g,aux,i}}{COP_i} \cdot f_{Hs/Hi} \)
 </a>


- 히트펌프의 전체 열손실 (\(Q_{h,g}\))
 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,g,s,i} = Q_{h,s} \cdot \frac{t_i}{t_h \cdot 24} \)
 </a>

 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,g,1} = Q_{h,g,S,i} + Q_{h,g,\oplus,i} \)
 </a>


- 히트펌프 운전에 필요한 보조에너지 (\(Q_{h,g,aux}\))
 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,g,aux} = \left( \Phi_{prim,aux} + \Phi_{sek,aux} \right) \cdot 0.001 \cdot t_{ON,aux} \)
 </a>


보조구성요소의 성능요구를 모를 경우:  
  <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( \Phi_{prim/sek,aux} = \frac{\Delta p \cdot \dot{V}}{\eta_{aux} \cdot 3600} \)
 </a>


히트펌프 시스템에서 **1차 순환(열원 측, \(\psi_{prim,aux}\))**에서는 열원 펌프의 가동에너지를 고려하며, 보조기기의 가동시간은 모든 온도등급에서의 히트펌프 운전시간의 합으로 산정됩니다. 염수-물 또는 물-물 히트펌프의 경우, 기화기 내 내부 압력손실 보강에 필요한 에너지는 이미 성능지수(COP)에 포함되어 있지만, 열원 설비 내 추가 압력손실에 대한 보조에너지는 별도로 고려되며, 데이터가 없을 경우 압력손실 40 kPa을 기준으로 적용합니다.  

한편, **2차 순환(열이용 측, \(\psi_{sek,aux}\))**에서는 히트펌프와 분배 시스템 간의 연결에 따라 추가 펌프가 필요할 수 있으며, 외부 압력손실을 보완하기 위한 에너지도 반영됩니다. 보조기기의 운전시간은 모든 온도등급에 대한 사용시간의 합으로 산정되며, 압력손실 값이 없을 경우 10 kPa을 기본값으로 사용합니다.

- 두 번째 열원기기의 에너지수용량 (재가열시스템)
 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,outg,bu} = \max\left(\sum_i Q_{in,d,i} - Q_{h,outg,i,\oplus} \, ; \, P_{bu,h} \cdot Q_{h,outg}\right) \)
 </a>


- 전체 에너지수용량

전체 전기에너지수용량(또는 연소원료에너지량)은 히트펌프(\(Q_{h,f,1}\))와 2번째 열원기기의 유입에너지(\(Q_{h,f,bu}\))의 합으로 계산됩니다.  
 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,f} = Q_{h,f,1} + Q_{h,f,bu} \)
 </a>


- 재생에너지유입량
 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,in} = Q_{h,outg} - Q_{h,f} + Q_{h,g} \)
 </a>

