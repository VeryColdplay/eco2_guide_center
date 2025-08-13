# 3.6. 열병합 에너지소요량 (Energy use for combined heat and power system)

열병합 발전시스템은 전기와 열을 생산합니다. 생산된 에너지는 전기설비 또는 열원기기를 포함한 건물의 전체 시스템에 적용됩니다.
이에 따라 CHP의 계산은 다음과 같이 3가지로 구성됩니다:

- CHP에 의한 전력생산량
- CHP에 의한 열원기기의 에너지소요량
- 에너지소요량으로부터 기인된 전력생산량

생산된 열은 열원기기에 의해 열에너지를 공급하게 됩니다. 
따라서 해당 열에너지만큼을 시스템에 공급하기 위한 에너지소요량이 요구됩니다.

## 3.6.1. CHP에 의한 전력생산량
전력생산량은 다음 값으로 환산될 수 있습니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{f,Bonus,a} = -E_{CHP,a} \)
</a>


한편 CHP로부터 생산된 전기에너지 \(E_{CHP,a}\)는:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( E_{CHP,a} = C \cdot Q_{h,outg,CHP,a} \)
</a>


Where,
C: 전기 지수 (특별한 제시사항이 없는 경우 0.75 적용)
\(Q_{h,outg,CHP,a}\): CHP가 시스템(열원기기)에 공급하는 열량

### 3.6.1.1. CHP가 시스템(열원기기)에 공급하는 열량
CHP가 열원기기에  공급하는 열량은 다음과 같이 계산됩니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,outg,CHP,a} = \beta \cdot Q_{h,outg,a} \)
</a>


Where,
beta: 전체 열 생산에 대한 CHP의 열 생산비율 (특별한 제시사항이 없는 경우 0.5 적용)
\(Q_{h,outg,a}\): 난방시스템에 대한 열원기기의 연간 열 공급량 (kWh/year)

이에 따라 열원기기가 연간 시스템에 공급하는 열량 \(Q_{h,outg,HP,a}\)은:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,outg,HP,a} = (1 - \beta) \cdot Q_{h,outg,a} \)
</a>



## 3.6.2. CHP에 의한 열원기기의 에너지소요량
열원기기의 에너지소요량은 다음에 의해 계산되어 난방 또는 급탕시스템에 합산됩니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,f,a} = \left[ \frac{1 - \beta}{\eta_{HP}} + \frac{(1 + C) \cdot \beta}{\eta_{CHP}} \right] \cdot \frac{Q_{h,outg,a}}{\eta_{HN}} \)
</a>


만일 에너지소요량이 음수가 될 경우 0으로 간주합니다.

## 3.6.3. 에너지소요량으로부터 기인된 전력생산량
열원기기의 에너지소요량으로부터 기인된 전력생산량은 전기에 대한 1차에너지환산계수와 사용된 에너지매체를 고려하여 계산됩니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{h,f,a} = \left[ \frac{1 - \beta}{\eta_{HP}} + \frac{(1 + C) \cdot \beta}{\eta_{CHP}} - \frac{f_{p,Strom}}{f_p} \cdot C \cdot \beta \right] \cdot \frac{Q_{h,outg,a}}{\eta_{HN}} \)
</a>


Where, \(η_{HN}\): 난방망의 이용효율로, 다음 표를 따라 결정합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>기계실 난방망 고려 표</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    table {
      border-collapse: collapse;
      margin: auto;
      width: 60%;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 12px;
      text-align: center;
    }
    th {
      background-color: #f0f0f0;
    }
  </style>
</head>

<h3>&lt;표 #. 난방망 연결 유형에 따른 \( n_{HN} \)&gt;</h3>

<table>
  <tr>
    <th>구분</th>
    <th>\( n_{HN} \)</th>
  </tr>
  <tr>
    <td>기계실에 대한 난방망을 고려할 때</td>
    <td>0.9</td>
  </tr>
  <tr>
    <td>다른 난방망에 연결된 경우</td>
    <td>1</td>
  </tr>
</table>

</html>


DIN 18599-1에 따른 합산 시 사용된 에너지매체의 1차에너지 환산계수 또는 이산화탄소 배출계수가 이용됩니다. 
