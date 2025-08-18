# 3.5. 환기/가습 에너지소요량 (Energy use for ventilation & humidification system)

환기/가습 에너지소요량 파트에서는 공조에 필요한 에너지소요량 중 환기(팬)와 가습에 대한 내용만을 포함하고 있습니다. 보다 구체적으로는 다음의 5가지 항목을 다룹니다:   
 (1) 실내냉방 팬   
 (2) 열회수기 펌프 및 전동장치   
 (3) 가습기 펌프   
 (4) 증기공급을 위한 2차에너지   
 (5) 가습에 대한 증기 생산기   

---

## 3.5.1. 실내냉방 팬

실내냉방 팬에 대한 보조에너지 Q_c,ce,aux는 다음을 따라 계산됩니다:
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{c,ce,aux} = f_{c,ce,aux} \cdot Q_{c,outg} \cdot t_{c,op} / 1000h \) 
</a>

Where,
\(f_{c,ce,aux}\):찾는 중
\(Q_{c,outg}\): 찾는 중
\(t_{C,op}\): 찾는 중

\(f_{c,ce,aux}\)는 다음 표에 따라 결정됩니다.
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>정격성능 표</title>
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
    <th rowspan="1"></th>
      <th class="left">정격성능<br>kW/kW</th>
      <th><i>f<sub>ce,aux</sub></i><br>kWh/kWh</th>
    </tr>
    <tr>
      <td class="left">실내냉방기기: 덕트분배 및 개별 취출구에 의한 DX-공조기</td>
      <td>0.030</td>
      <td>0.060</td>
    </tr>
    <tr>
      <td class="left">실내냉방기기: DX(직팽식)-공조기<br>천정 카세트형</td>
      <td>0.020</td>
      <td>0.040</td>
    </tr>
    <tr>
      <td class="left">실내냉방기기: DX(직팽식)-공조기<br>벽 부착형 및 상치 매입형</td>
      <td>0.020</td>
      <td>0.040</td>
    </tr>
    <tr>
      <td class="left">냉수 팬컨벡터<br>상치 매입형 및 천정형<br>냉수온도 6℃</td>
      <td>0.020</td>
      <td>0.040</td>
    </tr>
    <tr>
      <td class="left">냉수 팬컨벡터<br>상치 매입형 및 천정형<br>냉수온도 14℃</td>
      <td>0.035</td>
      <td>0.070</td>
    </tr>
    <tr>
      <td class="left">냉수 팬컨벡터<br>덕트분배식 천정형<br>냉수온도 14℃</td>
      <td>0.040</td>
      <td>0.080</td>
    </tr>
  </table>
</body>
</html>


---

## 3.5.2. 열회수기 펌프 및 전동장치

열회수기 펌프 및 전동장치에 소요되는 에너지는 순환배관망 연동시스템 펌프와 회전자 구동에 필요한 전기 에너지요구량, 즉 보조에너지에 해당됩니다. 

---

### 3.5.2.1. 순환배관망 연동시스템 펌프

열회수에 대한 연간 보조에너지 \(Q_{hr,f,aux,a}\)는 다음에 의해 계산됩니다:
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{hr,f,aux,a} = P_{el,av,KVS} \cdot t_{WRG} \)
</a>


Where,
\(P_{el,av,KVS}\) = 순환배관망 연동시스템 펌프의 전기적 성능 [W] (보고서에 명시되지 않음)
\(t_{WRG}\)=열회수기 펌프의 운전시간

\(P_{el,av,KVS}\)는 펌프의 제어 방식에 따라 두 가지로 계산됩니다:
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>펌프 제어 방식</title>
  <style>
    table {
      border-collapse: collapse;
      width: 100%;
      font-family: "Malgun Gothic", sans-serif;
      font-size: 14px;
      text-align: left;
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
      <th>펌프 제어 방식</th>
      <th>계산식</th>
    </tr>
    <tr>
      <td>비제어</td>
      <td>
        <div>$$P_{el,av,KVS} = V_e \cdot 0.03 \; \mathrm{W}/(\mathrm{m}^3/\mathrm{h})$$</div>
      </td>
    </tr>
    <tr>
      <td>회전수제어</td>
      <td>
        <div>$$P_{el,av,KVS} = V_e \cdot 0.015 \; \mathrm{W}/(\mathrm{m}^3/\mathrm{h})$$</div>
      </td>
    </tr>
  </table>
</body>

</html>
Where, \(V_{e}\): 열회수기의 설계-외기유량

---

### 3.5.2.2. 회전자 구동
회전식 열교환기 구동에 대한 연간 보조에너지 \(Q_{hr,f,aux,a}\)는 다음에 의해 계산됩니다:
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{hr,f,aux,a} = P_{el,av,rot} \cdot t_{WRG} \)
</a>

Where,
\(P_{el,av,rot}\) = 회전자 구동의 전기적 성능 [W]
\(t_{WRG}\)=열회수기 펌프의 운전시간 

회전자 구동의 전기적 성능은 열회수의 설계-외기유량에 따라 다음 표와 같이 결정합니다.
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>외기유량과 전기적 성능</title>
  <style>
    table {
      border-collapse: collapse;
      width: 60%;
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
      <th>열회수의 설계-외기 유량 V<sub>e</sub><br>[m³/h]</th>
      <th>회전자 구동의 전기적 성능<br>P<sub>el,av,rot</sub> [W]</th>
    </tr>
    <tr>
      <td>&lt; 7,500</td>
      <td>90</td>
    </tr>
    <tr>
      <td>7,500–25,000</td>
      <td>180</td>
    </tr>
    <tr>
      <td>25,000–65,000</td>
      <td>370</td>
    </tr>
    <tr>
      <td>&gt; 65,000</td>
      <td>750</td>
    </tr>
  </table>
</body>
</html>


---
## 3.5.3. 가습기 펌프

가슴기 펌프에 대한 연간 보조에너지 \(Q_{mh,f,aux}\)는 공조기기의 운전시간에 대한 표준값을 바탕으로 다음과 같이 계산됩니다:

<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{hr,f,aux,a} = V_e \cdot P_{el,mth} \cdot t_{VB} \cdot f_{mh} \) 
</a>

Where,
\(V_{e}\): 가습의 설계-외기유량
\(P_{el,mh}\): 가습기 펌프의 공기유량 m^3/h 당 성능
\(t_{VB}\): 가습 운전시간
\(f_{mh}\): 가습제어에 대한 부분부하 계수

가습기 펌프의 공기유량 \(m^3/h\)당 성능은 다음 표를 따라 결정됩니다:
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>제어방식에 따른 성능 및 제어계수</title>
  <style>
    table {
      border-collapse: collapse;
      width: 90%;
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
      <th rowspan="1"> </th>
      <th rowspan="1">제어</th>
      <th rowspan="1">성능<br>P<sub>el,mth</sub><br>W/m²/h</th>
      <th colspan="1">제어계수<br>f<sub>mh</sub><br>6 g/kg</th>
      <th colspan="1">제어계수<br>f<sub>mh</sub><br>8 g/kg</th>
    </tr>
    <tr>
      <td rowspan="1">에어 와셔식 및 적하식</td>
      <td>비제어 및 밸브제어</td>
      <td>0.01</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td rowspan="4">순환 분무식</td>
      <td>비제어</td>
      <td>0.20</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>밸브제어</td>
      <td>0.20</td>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td>비례 펄스</td>
      <td>0.20</td>
      <td>0.35</td>
      <td>0.50</td>
    </tr>
    <tr>
      <td>회전수제어</td>
      <td>0.20</td>
      <td>0.20</td>
      <td>0.30</td>
    </tr>
    <tr>
      <td>고압식</td>
      <td>회전수제어</td>
      <td>0.04</td>
      <td>0.35</td>
      <td>0.50</td>
    </tr>
  </table>
</body>
</html>


---

## 3.5.4. 증기공급을 위한 2차에너지 

증기공급에 대한 2차에너지 \(Q_{m*,f}\)는 다음을 따라 계산됩니다:
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{m^*,f} = Q_{m^*,outg} \cdot f_{m^*,f} \)
</a>

Where, 
\(Q_{m*,outg}\): 증기생산을 위한 열생산기의 열공급량
\(f_{m*,f}\): 증기생산에 대한 2차에너지 계수

증기생산에 대한 2차에너지 계수 \(f_{m*,f}\)는 다음 표의 값을 활용합니다.
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>증기가습 종류별 에너지계수</title>
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
      <th>증기가습 종류</th>
      <th>에너지계수<br><i>f<sub>m*,f</sub></i></th>
    </tr>
    <tr>
      <td class="left">전기적 전극 또는 저항가열 - 비정제수 (음료용이 아닌)</td>
      <td>1.16</td>
    </tr>
    <tr>
      <td class="left">가스가열 - 비정제수 (고위발열로 환산된)</td>
      <td>1.51</td>
    </tr>
    <tr>
      <td class="left">기름가열 - 비정제수 (고위발열로 환산된)</td>
      <td>1.45</td>
    </tr>
    <tr>
      <td class="left">자켓히팅이 없는 지역증기 (고위발열로 환산된)</td>
      <td>1.44</td>
    </tr>
    <tr>
      <td class="left">자켓히팅이 있는 지역증기 (고위발열로 환산된)</td>
      <td>1.55</td>
    </tr>
  </table>
</body>
</html>


---

## 3.5.5. 가습에 대한 증기 생산기

가습에 대한 증기 생산기에 대한 2차에너지 \(Q_{m*f}\)는 실내 냉방 팬에 대한 보조에너지를 참조하여 다음과 같이 계산됩니다:
<a href="/eco2_guide_center/1.%20ECO2%20Logic%20Guide/Hee1_Equation_List.html" class="equation-link" target="_blank" rel="noopener noreferrer">
  \( Q_{m^*,f,j(Dampf)} = \sum Q_{m^*,f} \) 
</a>
