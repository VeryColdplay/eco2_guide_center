# 3.5 풍력

풍력발전은 바람의 운동에너지를 회전체를 통해 전기에너지로 변환하는 시스템입니다. 풍력발전기는 날개(blade)와 허브(hub)로 구성된 회전자와 회전을 증속하여 발전기를 구동시키는 종속장치, 제어 장치, 유압 브레이크 장치 등으로 구성됩니다. 풍력발전기에서 연간 발전되는 전력량\(Q_{WT}\)을 산출하는 방법은 평균 전력 밀도법을 바탕으로 합니다. 시간별 데이터를 사용하여 1년 동안에 대한 바람의 평균 전력 밀도를 추정하고 발전기의 변환효율을 적용하여 전력량을 구합니다.

평균 전력 밀도법을 이용하여 연간 발전량을 산출하기 위해서는 다음 4가지 데이터가 요구됩니다:

**1. 지형**: 풍력 발전기가 설치되는 지형에 따른 지형 계수를 적용합니다.  
<center>
     <img src="../../_tables/3.2.15_1.png" style="max-width: 80%;" alt="지형 계수">
     <div><strong>지형 계수</strong></div>
</center>

**2. 직경 (m)**: 풍력발전기 날개의 직경을 지정합니다.

**3. 허브 높이 (m)**: 풍력발전기의 허브 높이를 지정합니다.

**4. 정격출력 (kW)**: 풍력발전기의 정격 풍속에서의 전력은 풍력발전기에 대한 변환효율을 지정하는데 사용됩니다.  
<center>
     <img src="../../_tables/3.2.15_2.png" style="max-width: 80%;" alt="풍력발전기 효율">
     <div><strong>풍력발전기 효율</strong></div>
</center>

---

## 3.5.1. 풍력발전기의 연간 발전량 산출 공식

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{WT} = 0.5 \cdot \rho \cdot (C_R(z) \cdot V_0)^3 \cdot A \cdot EPF \cdot K_{WT} \cdot 24 \cdot N / 1000 \)
</a>


조도 길이 \(z_{0}\)는 풍속이 높이에 따라 대수적 형태로 변화한다고 가정할 때, 평균 풍속이 0이 되는 지표면 근처의 가상의 높이를 의미합니다. 이는 지면의 거칠기 정도를 나타내는 지표로, 흔히 거칠기 길이 또는 지면 거칠기 고도라고도 불립니다.  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( C_R(z) = K_R \cdot \ln(z / z_0) \)
</a>


날개의 회전 면적은 풍력발전기의 날개 직경으로부터 구해집니다.  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( A = \pi \cdot \frac{D^2}{4} \)
</a>


연간 평균 전력 밀도와 풍속으로부터 에너지 패턴 계수(EPF)를 산출할 수 있으며, 연간 평균 전력 밀도는 시간별 풍속과 공기의 밀도로부터 구해집니다.  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( EPF = \frac{APD}{0.5 \cdot \rho \cdot V_0^3} \)
</a>
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( APD = \frac{\sum_{i=1}^{8760} 0.5 \cdot \rho \cdot V_i^3}{8760} \)
</a>


수직축 풍력발전기의 연간 발전량은 수평축 풍력발전기에 대한 등가 발전기의 날개 직경을 이용하여 산출됩니다.  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( A_{VAWT} = \frac{\pi \cdot D_e^2}{4} \)
</a>

