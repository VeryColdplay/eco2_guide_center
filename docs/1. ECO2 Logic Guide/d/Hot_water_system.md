# 2.3. 급탕 에너지소요량 (Energy use for hot water system)

급탕 에너지소요량 \(Q_{w,f}\)는 급탕 열 생산기기의 열 공급량(\(Q_{w,outg}\)), 생산과정에서 발생하는 (월별) 열손실(\(Q_{w,g}\)) 및 재생열에너지(태양열 및 주변 열)에 의해 다음과 같이 계산됩니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,f} = Q_{w,outg} + Q_{w,g} - Q_{w,reg} \)
</a>


Where,  
\(Q_{w,outg}\): 급탕 열 생산기기의 열 공급량  
\(Q_{w,g}\): 생산과정에서 발생하는 (월별) 열손실  
\(Q_{w,reg}\): 재생열에너지(태양열 및 주변 열)  


---

## 2.3.1. 급탕 열 생산기기의 열 공급량

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,outg} = Q_{w,b} + Q_{w,ce} + Q_{w,d} + Q_{w,s} \)
</a>


Where,  
\(Q_{w,b}\): 급탕에너지요구량  
\(Q_{w,ce}\): 전달 열손실  
\(Q_{w,d}\): 분배 열손실  
\(Q_{w,s}\): 저장 열손실  

---

### 2.3.1.1. 전달 열손실

전달 열손실 \(Q_{w,ce}\)는 이미 존의 급탕 에너지요구량 \(Q_{w,b}\)에 포함되어 있으므로 0으로 계산합니다. 이에 따라 전달 열손실에 필요한 보조에너지 \(Q_{w,ce,aux}\) 또한 0이 됩니다.

---

### 2.3.1.2 분배 열손실

급탕배관망을 따라 분배되는 중앙 공급식 급탕의 경우, 전체 배관망의 열손실은 다음과 같이 계산됩니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,d} = \sum Q_{w.d.i} \)
</a>


Where  
\(Q_{w,d,i}\): 급탕배관망 구간 i의 열손실  

한편 구간 i의 열손실 \(Q_{w,d,i}\):

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,d,i} = \frac{1}{1000} \cdot U_i \cdot L_i \cdot (v_{w,m} - v_i) \cdot d_{Nutz,mth} \cdot t_{Nutz,T} \)
</a>


Where,  
\(U_{i}\): 구간 i 배관 열관류율  
\(L_{i}\): 구간 i 배관 길이  
\(v_{w,m}\): 급탕배관망 온도 (보고서에서는 복수의 의미로 사용)  
\(v_{i}\): 주변온도 (보고서에서는 복수의 의미로 사용)  
\(d_{Nutz,mth}\): 월간 이용일수  
\(t_{Nutz,T}\): 일일 이용시간  

---

배관망은 다음 그림과 같이 크게 V, S, SL의 3가지로 분류합니다.

![그림 3.2.9-2](../../_images/3.2.9_2.png)  
**그림 3.2.9-2. 배관망 분류**

- **V**: 생산기기에서 주관까지의 수평분배범위  
- **S**: 지관  
- **SL**: 취수구까지의 차단 가능한 말단 배관  

---

배관의 열관류율 \(U_{i}\)는 사양에 근거하여 계산되며, 사양을 모르는 경우 다음 표에 따라 적용합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>배관의 열관류율 U_i</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th rowspan="2">건물 준공연도</th>
      <th rowspan="1">분배</th>
      <th colspan="2">외부에 설치된 수직배관</th>
      <th colspan="2">내부에 설치된 수직배관</th>
    </tr>
    <tr>
      <th>V</th>
      <th>S</th>
      <th>SL</th>
      <th>S</th>
      <th>SL</th>
    </tr>
    <tr>
      <td>1995 이후</td>
      <td>0.200</td>
      <td>0.255</td>
      <td>0.255</td>
      <td>0.255</td>
      <td>0.255</td>
    </tr>
    <tr>
      <td>1980 ~ 1995</td>
      <td>0.200</td>
      <td>0.400</td>
      <td>0.400</td>
      <td>0.300</td>
      <td>0.400</td>
    </tr>
    <tr>
      <td>1980 이전</td>
      <td>0.400</td>
      <td>0.400</td>
      <td>0.400</td>
      <td>0.400</td>
      <td>0.400</td>
    </tr>
  </table>
</body>
</html>

구간 \(i\) 배관 길이 \(L_{i}\)는 세부 도면을 바탕으로 산정합니다.  

주변온도 \(v_{i}\)는 용도프로필에서 설정된 값이 적용되며, 만일 주어진 값이 없다면 다음 표를 참고하여 채택합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>주변온도 표</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px;
    }
    td.left {
      text-align: left;
    }
  </style>
</head>
<body>
  <table>
    <tr>
      <th>표준치</th>
      <th>표기</th>
      <th>단위</th>
      <th>V</th>
      <th>S</th>
      <th>SL</th>
    </tr>
    <tr>
      <td>주변온도</td>
      <td><i>v<sub>i</sub></i></td>
      <td>℃</td>
      <td colspan="3">제3장2절4항 참조</td>
    </tr>
    <tr>
      <td class="left">난방주기가 아닐 경우<br>평균 주변온도</td>
      <td><i>v<sub>i</sub></i></td>
      <td>℃</td>
      <td colspan="3">22℃</td>
    </tr>
    <tr>
      <td>평균 주변온도</td>
      <td><i>v<sub>i</sub></i></td>
      <td>℃</td>
      <td colspan="3">비 난방 존 13℃<br>난방 존 20℃</td>
    </tr>
  </table>
</body>
</html>


---

한편 순환배관이 있지만 순환이 정지되었다면 위 식에서의  

일일 이용시간 \(t_{Nutz,T}\):

$$
t_{Nutz,T} = 24\,\text{h} - t_{Nutz} \tag*{}
$$

급탕배관망 온도 \(v_{w,m}\):

$$
v_{w,m} = 23 \cdot U^{-0.2} \tag*{}
$$

---

만일 순환배관과 연결배관이 없다면 위 식에서의  

일일 이용시간 \(t_{Nutz,T}\):

$$
t_{Nutz,T} = 24\,\text{h} \tag*{}
$$

급탕배관망 온도 \(v_{w,m}\):

$$
v_{w,m} = 23 \cdot U^{-0.2} \tag*{}
$$

---

### 2.3.1.3 저장 열손실

저장 열손실 \(Q_{w,s}\)는 축열조의 가열 방식, 즉:  
(1) 간접 가열식  
(2) 간접 가열식, 태양열 복합  
(3) 전기 가열식  
(4) 가스 가열식  
에 따라 다음의 4가지 방식으로 계산됩니다:

**(1) 간접 가열식**

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = f_{\text{verbindung}} \cdot \frac{(50 - v_i)}{45} \cdot d_{Nutz,mth} \cdot q_{B,S} \)
</a>


**(2) 간접 가열식, 태양열 복합**

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = f_{\text{verbindung}} \cdot (UA)_{sb,s,a} \cdot \Delta v_i \cdot 24 \cdot 3600 \cdot d_{Nutz,mth} \cdot \frac{V_{s,aux}}{V_{s,aux} + V_{s,sol}} \)
</a>



**(3) 전기 가열식**

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = \frac{(55 - v_i)}{45} \cdot d_{Nutz,mth} \cdot q_{B,S} \)
</a>



**(4) 가스 가열식**

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = \frac{(55 - v_i)}{50} \cdot d_{Nutz,mth} \cdot q_{B,S} \)
</a>


---

### (1) 간접 가열식

간접 가열식 축열조의 저장 열손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = f_{\text{verbindung}} \cdot \frac{(50 - v_i)}{45} \cdot d_{Nutz,mth} \cdot q_{B,S} \)
</a>

Where,  
\(f_{verbindung}\): 연결배관에서 발생하는 열손실 계수, 1.2  
\(v_{i}\): 주변온도 (보고서에서는 복수의 의미로 사용)  
\(d_{Nutz,mth}\): 월간 이용일수  
\(q_{B,S}\): 책정-열손실  

만일 책정-열손실이 주어지지 않았다면 축열조의 용량을 기준으로 다음과 같이 계산합니다:

<table>
  <thead>
    <tr>
      <th>축열조 생산연도</th>
      <th>축열조 용량</th>
      <th>책정-열손실</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1995-</td>
      <td>1,000ℓ 이상</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 0.39 \cdot V^{0.35} + 0.5 \)
</a>
</td>
    </tr>
    <tr>
      <td></td>
      <td>1,000ℓ 이하</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 0.8 + 0.02 \cdot V^{0.77} \)
</a>
</td>
    </tr>
    <tr>
      <td>1987-1994</td>
      <td></td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 0.4 + 0.21 \cdot V^{0.4} \)
</a>
</td>
    </tr>
    <tr>
      <td>1978-1986</td>
      <td></td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 0.4 + 0.23 \cdot V^{0.4} \)
</a>
</td>
    </tr>
    <tr>
      <td>-1977</td>
      <td></td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 0.4 + 0.27 \cdot V^{0.5} \)
</a>
</td>
    </tr>
  </tbody>
</table>


Where V: 축열조 용량

축열조 용량은 제품사양서에 주어지지만, 용량을 모르는 경우 다음 식에 따라 계산합니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( V_s = \frac{Q_{w,b,d} \cdot f_N \cdot 860}{(v_{w,m} - v_k) \cdot \eta_s} \)
</a>

Where  
\(Q_{w,b,d}\): 일간 급탕에너지요구량  
\(f_{N}\): 보고서에 명시되지 않음  
\(v_{w,m}\): 급탕 배관망 온도 (보고서에서는 복수의 의미로 사용)  
\(v_{K}\): 보고서에 정확히 명시되지 않음 (\(v_{K}\): 냉수 공급온도)  
\(n_{S}\): 축열조 효율 (입식=0.95, 좌식=0.9)  

한편 \(f_{N}\)은 다음과 같이 계산합니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( f_N = \frac{1}{t_{Nutz,T} \cdot n_{Sp}} \)
</a>

Where  
\(t_{Nutz,T}\): 일일 이용시간  
\(n_{Sp}\): 일일 순간최대취수량 발생횟수

---

### (2) 간접 가열식, 태양열 복합

간접 가열식, 태양열 복합 축열조의 저장 열손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = f_{\text{verbindung}} \cdot (UA)_{sb,s,a} \cdot \Delta v_i \cdot 24 \cdot 3600 \cdot d_{Nutz,mth} \cdot \frac{V_{s,aux}}{V_{s,aux} + V_{s,sol}} \)
</a>

Where,  
\(f_{verbindung}\): 연결배관에서 발생하는 열손실 계수, 1.2  
\({UA}_{sb,s,a}\): 측정된 책정-열손실 [W/K]  
\(Δv_{i}\): 보고서에 명시되어 있지 않으나 온도차로 추정됨  
\(d_{Nutz,mth}\): 월간 이용일수  
\(V_{s,aux}\): 축열조 상부(태양열 부분을 뺀) 용량 [ℓ]  
\(V_{s,scl}\): 축열조 하부(태양열 저장부분)의 용량 [ℓ]

만일 축열조 책정-열손실 \({UA}_{sb,s,a}\)를 모르는 경우 축열조 용량에 따라 다음과 같이 계산합니다:

  **1) 축열조 용량 ≤ 1,000ℓ:**  
 <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = \left( 0.4 + 0.2 \cdot (V_{s,aux} + V_{s,sol})^{0.4} \right) \cdot \frac{V_{s,aux}}{V_{s,aux} + V_{s,sol}} \)
</a>


  **2) 축열조 용량 > 1,000ℓ:**  
  1,000ℓ를 초과하는 축열조는 여러 대의 분리된 축열조로 가정하여 계산합니다.  
  (각 축열조당 최대 1,000ℓ 적용)

---

### (3) 전기 가열식

전기 가열식 축열조의 저장 열손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = \frac{(55 - v_i)}{45} \cdot d_{Nutz,mth} \cdot q_{B,S} \)
</a>

Where,  
\(v_{i}\): 주변온도 (보고서에서는 복수의 의미로 사용)  
\(d_{Nutz,mth}\): 월간 이용일수  
\(q_{B,S}\): 책정-열손실  

책정-열손실 \(q_{B,S}\)은 저장온수와 설치공간과의 평균 온도차가 45K일 때 측정된 것으로, 측정값이 없는 경우 다음과 같이 계산합니다:

<table>
  <thead>
    <tr>
      <th>축열조 생산연도</th>
      <th>책정-열손실</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1995-</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 0.29 + 0.019 \cdot V^{0.8} \)
</a>
</td>
    </tr>
    <tr>
      <td>1989-1994</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 1.25 \cdot (0.29 + 0.019 \cdot V^{0.8}) \)
</a>
</td>
    </tr>
    <tr>
      <td>-1988</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 1.4 \cdot (0.29 + 0.019 \cdot V^{0.8}) \)
</a>
</td>
    </tr>
  </tbody>
</table>

Where, V: 축열조 용량

축열조 용량은 제품사양서에 주어지지만, 용량을 모르는 경우 다음 식에 따라 계산합니다:  

#### 1) 축열조 용량 ≤ 1,000ℓ

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>설명</th>
      <th>축열조 용량</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>심야</td>
      <td>주로 심야에 가동</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( V_s = \frac{1.42 \cdot Q_{w,b,d} \cdot f_N \cdot 860}{(v_{w,m} - v_k) \cdot \eta_s} \)
</a>
</td>
    </tr>
    <tr>
      <td>주간</td>
      <td>지속적 재충전 가능</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( V_s = \frac{0.67 \cdot Q_{w,b,d} \cdot f_N \cdot 860}{(v_{w,m} - v_k) \cdot \eta_s} \)
</a>
</td>
    </tr>
  </tbody>
</table>

Where,  
\(Q_{w,b,d}\): 일간 급탕에너지요구량  
\(f_{N}\): 보고서에 명시되지 않음  
\(v_{w,m}\): 급탕 배관망 온도 (보고서에서는 복수의 의미로 사용)  
\(v_{K}\): 보고서에 정확히 명시되지 않음 (\(v_{K}\): 냉수 공급온도)  
\(n_{S}\): 축열조 효율 (입식=0.95, 좌식=0.9)  

한편 \(f_{N}\)은 다음과 같이 계산합니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( f_N = \frac{1}{t_{Nutz,T} \cdot n_{Sp}} \)
</a>

Where,  
\(t_{Nutz,T}\): 일일 이용시간  
\(n_{Sp}\): 일일 순간최대취수량 발생횟수

#### 2) 축열조 용량 > 1,000ℓ

1,000ℓ를 초과하는 축열조는 여러 대의 분리된 축열조로 가정하여 계산합니다.  
(각 축열조당 최대 1,000ℓ 적용)

---

### (4) 가스 가열식

가스 가열식 축열조의 저장 열손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,s} = \frac{(55 - v_i)}{50} \cdot d_{Nutz,mth} \cdot q_{B,S} \)
</a>

Where,  
\(v_{i}\): 주변온도 (보고서에서는 복수의 의미로 사용)  
\(d_{Nutz,mth}\): 월간 이용일수  
\(q_{B,S}\): 책정-열손실  

책정-열손실 \(q_{B,S}\)은 저장온수와 설치공간과의 평균 온도차가 50K일 때 측정된 것으로, 측정값이 없는 경우 다음과 같이 계산합니다:-

<table>
  <thead>
    <tr>
      <th>축열조 생산연도</th>
      <th>책정-열손실</th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>1995-</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 2.0 + 0.033 \cdot V^{1.1} \)
</a>
</td>
    </tr>
    <tr>
      <td>1985-1994</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 2.0 + 0.033 \cdot V^{1.1} \)
</a>
</td>
    </tr>
    <tr>
      <td>-1984</td>
      <td><a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,S} = 1.4 \cdot (2.0 + 0.033 \cdot V^{1.1}) \)
</a>
</td>
    </tr>
  </tbody>
</table>

Where, V: 축열조 용량

단 위 식에서의 축열조 용량은 최대 500ℓ까지 적용되며, 500ℓ를 초과하는 용량은 여러 대의 최대 500ℓ 축열조로 구성된 것으로 간주하여 각 축열조의 열손실을 합산하여 계산합니다.

---

## 2.3.2. 생산과정에서 발생하는 (월별) 열손실

생산손실 \(Q_{w,g}\)는 급탕 방식, 즉:  
- (1) 연료장전식 급탕보일러  
- (2) 직접 가열식 축열조(가스)  
- (3) 지역난방  
에 따라 다음의 3가지 방식으로 계산됩니다:

---
- (1) 연료장전식 급탕보일러  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g} = Q_{w,g,100\%} \cdot d_{Nutz,mth} + Q_{B,w} \cdot \left( d_{Nutz,mth} - d_{h,r,B} \right) \)
</a>

- (2) 직접 가열식 축열조(가스)  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g} = Q_{w,g,100\%} \cdot d_{Nutz,mth} \quad [\text{kWh}] \)
</a>

- (3) 지역난방  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g} = H_{DS} \cdot (v_{DS} - v_i) \)
</a>

---

**(1) 연료장전식 급탕보일러**

연료장전식 급탕보일러의 생산손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g} = Q_{w,g,100\%} \cdot d_{Nutz,mth} + Q_{B,w} \cdot \left( d_{Nutz,mth} - d_{h,r,B} \right) \)
</a>

Where,  
\( Q_{w,g,100\%} \): 최대부하(정격성능)에서의 열손실  
\(d_{Nuts,mth}\): 월별 이용일수  
\(Q_{B,w}\): 대기모드(machine down-time)에서의 열손실 Q_B (Q_B,w와 정확히 매칭되는 설명은 부재)  
\(d_{h,r,B}\): 분석-운전일수 (난방 에너지소요량의 월별 계산 운전일 참조)  

---

\( Q_{w,g,100\%} \)는 다음과 같이 계산됩니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g,100\%} = \left( f_{H_s/H} - \eta_{k,100\%} \right) / \eta_{k,100\%} \cdot Q_{w,outg} / d_{Nutz,mth} \)
</a>

Where,  
\(f_{Hs/Hi}\): 연료원에 따른 고위발열/저위발열의 비  
\(\eta_{k,100\%}\): 찾는중 (maybe 정격성능효율)  
\(Q_{w,outg}\): 급탕시스템 열 생산기기의 열 공급량  
\(d_{Nutz,mth}\): 월별 이용일수  

정격성능 효율 \( \eta_{k,100\%} \)은 테스트 온도 70℃에서의 보일러의 정격성능과 관련된 효율로, 다음 식을 따라 계산합니다.  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( \eta_{k,100\%} = (A + B \cdot \log(\dot{Q}_N)) / 100 \)
</a>
 
Where,  
A, B: 효율계수  
\(\dot{Q}_N\): 정격성능  

> 이 식은 정격성능이 400kW인 경우까지 유효하며, 정격성능 \(\dot{Q}_N\)이 400kW를 초과할 경우 \(\dot{Q}_N\)=400kW로 적용합니다.  

효율계수 A, B는 다음 표와 같습니다.  
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>보일러 계수표</title>
  <style>
    table {
      border-collapse: collapse;
      width: 85%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 10px;
      vertical-align: middle;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th colspan="2">보일러 형식</th>
    <th>연식</th>
    <th>계수 A</th>
    <th>계수 B</th>
  </tr>
  <tr>
   <td rowspan="7">표준형 보일러</td>
    <td rowspan="3">가스보일러</td>
    <td>1978 이전</td>
    <td>79.5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1978 ~ 1994</td>
    <td>82.5</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1994 이후</td>
    <td>85</td>
    <td>2</td>
  </tr>
  <tr>
    <td rowspan="4">연료분사식 보일러<br>(가스/기름)</td>
    <td>1978 이전</td>
    <td>80</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1978 ~ 1986</td>
    <td>82</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1987 ~ 1994</td>
    <td>84</td>
    <td>2</td>
  </tr>
  <tr>
    <td>1994 이후</td>
    <td>85</td>
    <td>2</td>
  </tr>
  <tr>
  <td rowspan="5">저온 보일러</td>
    <td rowspan="2">가스보일러</td>
    <td>1978 ~ 1994</td>
    <td>85.5</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>1994 이후</td>
    <td>88.5</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td rowspan="3">연료분사식 보일러<br>(가스/기름)</td>
    <td>1987 이전</td>
    <td>84</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>1987 ~ 1994</td>
    <td>86</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td>1994 이후</td>
    <td>88.5</td>
    <td>1.5</td>
  </tr>
  <tr>
    <td rowspan="4">콘덴싱 보일러<br>(가스/기름)</td>
    <td rowspan="3">일반</td>
    <td>1987 이전</td>
    <td>89</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1987 ~ 1994</td>
    <td>91</td>
    <td>1</td>
  </tr>
  <tr>
    <td>1994 이후</td>
    <td>92</td>
    <td>1</td>
  </tr>
  <tr>
    <td>고효율</td>
    <td>1999 이후</td>
    <td>94</td>
    <td>1</td>
  </tr>
</table>

</body>
</html>


정격성능 \(\dot{Q}_N\)은 동시에 가동되는 모든 보일러성능의 합이거나 순차가동에서 최대 보일러성능 중 큰 값으로 정합니다. 즉:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( \dot{Q}_N = \max\left( \sum \dot{Q}_{N,gleichzeitig},\ \dot{Q}_{vorrangig} \right) \)
</a>


> 만일 제품사양이 없는 경우 콤비보일러 여부에 따라 다음과 같은 표준치를 적용합니다:  
> \(\dot{Q}_N\)=0.42(\(Q_{w,b,d}\)/0.036)^0.7  
> 콤비보일러인 경우, <a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( \dot{Q}_N = 24\ \text{kW} \)
</a>


---

또한 \(Q_{B,w}\)는 다음과 같이 계산됩니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{B,w} = q_{B,w} \cdot \dot{Q}_N / \eta_{k,100\%} \cdot (t_{Nutz,T} - t_{w,100\%}) \cdot f_{Hö/Ht} \)
</a>

Where,  
\(q_{B,v}\)  
\(\dot{Q}_N\): 정격성능  
\( \eta_{k,100\%} \): 찾는중 (maybe 정격성능효율)  
\(t_{Nutz,T}\): 일일 이용시간  
\( t_{w,100\%} \): 정격성능에서의 급탕용 보일러의 일일 가동시간  
\(f_{Hs/Hi}\): 연료원에 따른 고위발열/저위발열의 비  

\(q_{B,v}\)는 다음과 같이 계산됩니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,w} = q_{B,70} \cdot (v_{g,m} - v_i) / (70 - 20) \)
</a>

Where,  
\(q_{B,70}\): 책정 열손실  
\(v_{g,m}\): 대기모드 상태에서의 평균 보일러 온도(순환: 50℃, 비순환: 40℃)  
\(v_{i}\): 주변온도 (보고서에서는 복수의 의미로 사용)

---

정격성능 \(\dot{Q}_N\)에서의 급탕용 보일러의 일일 가동시간 \( t_{w,100\%} \)는 다음 계산식을 따릅니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( t_{w,100\%} = Q_{w,outg} / (\dot{Q}_N \cdot d_{Nutz,mth}) \)
</a>

Where,  
\(Q_{w,outg}\): 급탕시스템 열 생산기기의 열 공급량  
\(\dot{Q}_N\): 정격성능  
\(d_{Nutz,mth}\): 월별 이용일수

보일러의 책정열손실 \(q_{B,70}\)은 다음 식에 따라 계산됩니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( q_{B,70} = (E \cdot (Q_N)^F)/100 \)
</a>

Where,  
\(\dot{Q}_N\): 정격성능  
E, F: 책정열손실 계수  

책정열손실 계수 E, F는 다음 표와 같습니다.  
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>보일러 계수 E, F</title>
  <script type="text/javascript" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    table {
      border-collapse: collapse;
      width: 95%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px;
      vertical-align: middle;
    }
    td.left {
      text-align: left;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th>보일러형식</th>
    <th>연식</th>
    <th>계수 E</th>
    <th>계수 F</th>
  </tr>

  <!-- 표준난방보일러 -->
  <tr>
    <td colspan="4">표준난방보일러</td>
  <tr>
  <tr>
    <td rowspan="3">가스보일러</td>
    <td>1978 이전</td><td>8.0</td><td>−0.27</td>
  </tr>
  <tr><td>1978 ~ 1994</td><td>7.0</td><td>−0.3</td></tr>
  <tr><td>1994 이후</td><td>8.5</td><td>−0.4</td></tr>
  <tr>
    <td rowspan="3">연료분사식 보일러 (기름/가스)</td>
    <td>1978 이전</td><td>9.0</td><td>−0.28</td>
  </tr>
  <tr><td>1978 ~ 1994</td><td>7.5</td><td>−0.31</td></tr>
  <tr><td>1994 이후</td><td>8.5</td><td>−0.4</td></tr>

  <!-- 저온보일러 -->
  <tr>
    <td colspan="4">저온보일러</td>
  <tr>
  <tr>
    <td rowspan="2">가스보일러</td>
    <td>1994 이전</td><td>6.0</td><td>−0.32</td>
  </tr>
  <tr><td>1994 이후</td><td>4.5</td><td>−0.4</td></tr>
  <tr>
    <td rowspan="1">콤비보일러</td>
    <td>1994 이후</td>
    <td colspan="2">\( q_{B,70^\circ C} = 0.022 \)</td>
  </tr>
    <tr>
    <td rowspan="1">콤비보일러</td>
    <td>1994 이후</td>
    <td colspan="2">\( q_{B,70^\circ C} = 0.012 \)</td>
  </tr>

  <tr>
    <td rowspan="2">연료분사식 보일러 (기름/가스)</td>
    <td>1994 이전</td><td>7.0</td><td>−0.37</td>
  <tr>
  <tr><td>1994 이후</td><td>4.25</td><td>−0.4</td><tr>

  <tr>
    <td rowspan="2">콘덴싱 보일러 (기름/가스)</td>
    <td>1994 이전</td><td>7.0</td><td>−0.37</td>
  </tr>
  <tr><td>1994 이후</td><td>4.0</td><td>−0.4</td></tr>

  <tr>
    <td rowspan="1">콤비보일러 (11kW, 18kW 및 24kW)</td>
    <td>1994 이전</td><td colspan="2">\( q_{B,70^\circ C} = 0.022 \)</td>
  </tr>
  <tr>
    <td rowspan="1">콤비보일러 (11kW, 18kW 및 24kW)</td>
    <td>1994 이후</td><td colspan="2">\( q_{B,70^\circ C} = 0.012 \)</td>
  </tr>

</table>

</body>
</html>


> 한편 d_h,r,B > \(d_{Nuts,mth}\)인 경우 \(d_{h,r,B}\) - \(d_{Nuts,mth}\) = 0으로 가정합니다.

---

**(2) 직접 가열식 축열조(가스)**

직접 가열식 축열조(가스)의 생산손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g} = Q_{w,g,100\%} \cdot d_{Nutz,mth} \quad [\text{kWh}] \)
</a>

Where,  
\( Q_{w,g,100\%} \): 최대부하(정격성능)에서의 열손실  
\(d_{Nuts,mth}\): 월별 이용일수  

> 가스에 의해 직접 가열되는 축열조의 경우 고려되는 생산손실은 난방보일러의 경우와 동일합니다.  
> 다만 대기모드에서의 열손실 \(Q_{B}\)(또는 \(Q_{B,w}\))은 가스 가열식 급탕용 축열조의 저장 열손실 \(Q_{w,s}\)에서 이미 고려한 바 있습니다.

최대부하(정격성능)에서의 열손실 \( Q_{w,g,100\%} \)은 다음에 의해 계산됩니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g,100\%} = \left( \frac{f_{H3/H} \cdot \eta_{100\%}}{\eta_{100\%}} \right) \cdot Q_{w,outg} / d_{Nutz,mth} \quad [\mathrm{kWh}] \)
</a>

Where,  
\(f_{Hs/Hi}\): 연료원에 따른 고위발열/저위발열의 비  
\( \eta_{100\%} \): 찾는중 (maybe 정격성능효율, 82%)  
\(Q_{w,outg}\): 급탕시스템 열 생산기기의 열 공급량  
\(d_{Nutz,mth}\): 월별 이용일수

---

**(3) 지역난방**

지역난방의 생산손실:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,g} = H_{DS} \cdot (v_{DS} - v_i) \)
</a>

Where,  
\(H_{DS}\): 찾는중  
\(v_{DS}\): 찾는중  
\(v_{i}\): 주변온도 (보고서에서는 복수의 의미로 사용)

한편 \(H_{DS}\)는:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( H_{DS} = B_{DS} \cdot \dot{V}_{DS}^{1/3} \)
</a>

Where,  
\(B_{DS}\): 찾는중  
\(Φ_{DS}\): 지역난방기계실 성능

\(B_{DS}\)의 값은 다음 표를 참조합니다.  
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>지역난방기계실 단열등급 표</title>
  <style>
    table {
      border-collapse: collapse;
      width: 80%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 10px;
      vertical-align: middle;
    }
    td.left {
      text-align: left;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th rowspan="3">지역난방<br>기계실</th>
    <th>구분</th>
    <th colspan="1">지역난방기계실 단열등급</th>
  </tr>
  <tr>
    <td>2차에서의 단열<br>1차에서의 단열</td>
    <td> 4    3    2    1<br> 5    4    3    2</td>
  </tr>
  <tr>
    <td>온수, 저온<br>온수, 저온</td>
    <td>3.5  4.0  4.4  4.9<br>3.1  3.5  3.9  4.3</td>
  </tr>
</table>

</body>
</html>


\(v_{DS}\)는 다음을 따라 계산됩니다:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( \nu_{DS} = D_{DS} \cdot \nu_{prim,DS} + (1 - D_{DS}) \cdot \nu_{sek,DS} \)
</a>

Where,  
\(D_{DS}\)  
\(v_{prim,DS}\)  
\(v_{sek,DS}\)

- \(v_{prim,DS}\)는 지역난방 1차 온도를 의미합니다. (보고서에는 명시되어 있지 않음)  
- \(v_{sek,DS}\)는 지역난방 2차 온도로 40℃ 또는 50℃ 값을 활용합니다.

\(D_{DS}\)의 값은 \(v_{prim,DS}\)에 따라 다음 표를 참조합니다.  
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>지역난방기계실 해석 온도</title>
  <style>
    table {
      border-collapse: collapse;
      width: 70%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: center;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 10px;
    }
  </style>
</head>
<body>

<table>
  <tr>
    <th rowspan="1">지역난방기계실 종류</th>
    <th colspan="1">1차 온도 (해석)<br><i>v<sub>P,DS</sub> (℃)</i></th>
    <th rowspan="1"><i>D<sub>DS</sub></i></th>
  </tr>
  <tr>
    <td>중온수<br>고온수</td>
    <td>105<br>150</td>
    <td>0.6<br>0.4</td>
  </tr>
</table>

</body>
</html>


---

## 2.3.3. 재생열에너지(태양열 및 주변 열)

급탕 에너지소요량 식:  
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,f} = Q_{w,outg} + Q_{w,g} - Q_{w,reg} \)
</a>

에서, 
태양열 및 주변 열 등의 재생열에너지 \(Q_{w,reg}\)는 다음과 같이 계산됩니다:
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{w,reg} = Q_{w,sol} + Q_{w,in} \)
</a>

Where,  
\(Q_{w,sol}\): 급탕에 공급된 태양열시스템 공급 열량  
\(Q_{w,in}\): 찾는중  

급탕에 공급된 태양열시스템 공급 열량은 3.1. 태양열에서 다룹니다.
