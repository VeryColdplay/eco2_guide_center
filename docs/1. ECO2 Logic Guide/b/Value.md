# 1.3. 개별 값 설정

개별 값 설정에서는 획득열 이용률 및 실내온도 관련 변수들의 값을 설정합니다.

## 1.3.1 획득열 이용률(획득된 열의 이용률; 열획득 이용률; 열획득원의 이용효율)

존에서 획득된 열의 이용률은 난방∙냉방, 운용일∙비운용일 등에 따른 각 열획득∙열손실의 비에 상응하여 결정됩니다.

(식 추가 요청, 보고서 113p 식 3.2.4-21)

이용률에는 실내요구온도 위로 2K의 온도상승이 고려되어 있습니다. 이는 열획득이 2K 정도의 실내온도상승까지 이용 가능한 것으로 채택된다는 것을 의미합니다. 먼저 이러한 실내온도상승에 대해 초과된 열은 예로서 늘어난 환기에 의해 더 이상 이용되지 않는다는 것을 의미합니다. 냉방의 경우 이는 실내요구온도보다 2K 이상일 때부터 나머지 모든 열 유입은 냉방에 의해 상쇄되는 것을 의미합니다.

### 1.3.1.1. 유효계수
이로부터 유효계수 η는 획득열 이용률 γ 및 Q_sink에 따라 다음과 같이 계산됩니다:

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>η 계산 조건</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    body {
      font-family: "Malgun Gothic", sans-serif;
      text-align: center;
    }
    table {
      margin: auto;
      border-collapse: collapse;
      width: 60%;
    }
    th, td {
      border: 1px solid black;
      padding: 6px 12px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h3>&lt;표: η 계산 조건별 식&gt;</h3>

<table>
  <tr>
    <th>item</th>
    <th>\(\eta\)</th>
  </tr>
  <tr>
    <td>\(\gamma \ne 1\)</td>
    <td class="highlight">(식 추가 요청, 보고서 114p 식 3.2.4-23)</td>
  </tr>
  <tr>
    <td>\(\gamma = 1\)</td>
    <td class="highlight">(식 추가 요청, 보고서 114p 식 3.2.4-24)</td>
  </tr>
  <tr>
    <td>\(Q_{\text{sink}} = 0\)</td>
    <td>\(\eta = 0\)</td>
  </tr>
</table>

</body>
</html>


Where, a: 건물 존의 시간상수를 고려하는 수치적 매개변수

(식 추가 요청, 보고서 114p 식 3.2.4-25)
Where,
a_0: 상수, 아래 식 참조
τ_0: 상수, 아래 식 참조

(식 추가 요청, 보고서 134p 식 3.2.4-135)

### 1.3.1.2.존의 냉각시간상수
시간상수 τ는 존의 총열손실계수에 대해 존을 둘러싸고 있는 구조체의 축열능력(thermal capacity)을 나타냅니다. 단 τ≤48인 경우 48로 적용합니다.
(식 추가 요청, 보고서 113p 식 3.2.4-22)

Where, 
H: 총열손실계수
C_wirk: 존의 열저장능률(존을 둘러싸고 있는 구조체의 축열능력)


총열손실계수는 전도와 환기에 의한 열손실의 합으로 결정됩니다:
(식 추가 요청, 보고서 114p 최상단에 있는 번호 없는 식 (H=H_T+H_V=...))

(식 추가 요청, 보고서 134p 식 3.2.4-129)
H_V,mech,Θ는 경우에 따라 다음 표를 이용하여 산정합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>H_V,mech,Θ 계산 조건</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    body {
      font-family: "Malgun Gothic", sans-serif;
      text-align: center;
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
      background-color: #f2f2f2;
    }
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h3>&lt;표: \(H_{V,\text{mech},\Theta}\) 계산 조건별 식&gt;</h3>

<table>
  <tr>
    <th>Item</th>
    <th>\(H_{V,\text{mech},\Theta}\)</th>
  </tr>
  <tr>
    <td>냉방기능이 있는 공조기의 경우</td>
    <td class="highlight">(식 추가 요청, 보고서 134p 식 3.2.4-130)</td>
  </tr>
  <tr>
    <td>냉방기능이 없는 경우</td>
    <td class="highlight">(식 추가 요청, 보고서 134p 식 3.2.4-131)</td>
  </tr>
  <tr>
    <td>온풍난방이고, 급기온도 ≥ 실내요구온도</td>
    <td class="highlight">(식 추가 요청, 보고서 134p 식 3.2.4-132)</td>
  </tr>
</table>

</body>
</html>



### 1.3.1.1.존의 열 저장능률
존의 열 저장능률 C_wirk는 내부 및 외부구조체 밀도에 따라 다음 표를 참고하여 계산합니다.

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>C_wirk 산정 기준</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    body {
      font-family: "Malgun Gothic", sans-serif;
      text-align: center;
    }
    table {
      margin: auto;
      border-collapse: collapse;
      width: 75%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px 12px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h3>&lt;표: \(C_{\text{wirk}}\) 산정 기준&gt;</h3>

<table>
  <tr>
    <th>item</th>
    <th>내부 및 외부구조체 밀도</th>
    <th>\(C_{\text{wirk}}\)</th>
  </tr>
  <tr>
    <td>가벼운 건물 존</td>
    <td>\(<\ 600\ \text{kg/m}^3\)</td>
    <td class="highlight">(식 추가 요청, 보고서 133p 식 3.2.4-126)</td>
  </tr>
  <tr>
    <td>중간 무게의 건물 존</td>
    <td>\(\geq\ 600\ \text{kg/m}^3\)</td>
    <td class="highlight">(식 추가 요청, 보고서 133p 식 3.2.4-127)</td>
  </tr>
  <tr>
    <td>무거운 건물 존</td>
    <td>\(\geq\ 1000\ \text{kg/m}^3\)</td>
    <td class="highlight">(식 추가 요청, 보고서 134p 식 3.2.4-128)</td>
  </tr>
</table>

</body>
</html>



## 1.3.2. 실내온도
실내온도는 해석을 위해 여러가지로 구분될 수 있습니다:
v_i,h,soll: 난방-실내요구온도(월평균온도)
v_i,c,soll: 냉방-실내요구온도(월평균온도)
v_i,h,min: 최소(허용)온도(난방해석)
v_i,c,max: 최대(허용)온도(냉방해석)
v_i,h: 난방-분석실내온도
v_i,c: 냉방-분석실내온도
v_u: 분석 존과 경계를 이루는 비난방 존의 온도
v_z: 분석 존과 경계를 이루는 난방/냉방 존의 온도
v_i,h,min: 최대 난방부하계산을 위한 최소실내온도
v_i,c,max,d: 최대 냉방부하계산을 위한 최대허용실내온도

난방 및 냉방 분석을 위한 분석실내온도는 다음 2가지로 구분됩니다:
난방 분석 실내온도
냉방 분석 실내온도

### 1.3.2.1. 난방 분석 실내온도

기본적으로 다음 식에 의해 계산됩니다:

(식 추가 요청, 보고서 115p 식 3.2.4-26)

그러나 야간, 주말, 휴일 등 운용조건이 주중 실내온도와 다를 경우에는 별도로 계산됩니다.

#### 1.3.2.1.1. 야간
(식 추가 요청, 보고서 115p 식 3.2.4-27, Where 포함)

만일 감소운전 또는 운전정지의 경우 f_NA는 다음 중 해당하는 값을 적용합니다:

<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>f_NA 산정 기준</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    body {
      font-family: "Malgun Gothic", sans-serif;
      text-align: center;
    }
    table {
      margin: auto;
      border-collapse: collapse;
      width: 60%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px 12px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h3>&lt;표: \(f_{\text{NA}}\) 산정 기준&gt;</h3>

<table>
  <tr>
    <th>item</th>
    <th>\(f_{\text{NA}}\)</th>
  </tr>
  <tr>
    <td>감소운전</td>
    <td class="highlight">(식 추가 요청, 보고서 116p 식 3.2.4-28)</td>
  </tr>
  <tr>
    <td>운전정지</td>
    <td class="highlight">(식 추가 요청, 보고서 116p 식 3.2.4-29)</td>
  </tr>
</table>

</body>
</html>



#### 1.3.2.1.2. 주말 및 휴일
(식 추가 요청, 보고서 116p 식 3.2.4-30)

만일 감소운전 또는 운전정지의 경우 f_we는 다음 중 해당하는 값을 적용합니다:

#### 1.3.2.1.3. 부분난방(공간적으로 제한된 난방가동)

부분난방의 경우 다음과 같이 실내요구온도의 미달이 허용됩니다.
(식 추가 요청, 보고서 116p 식 3.2.4-33)

Where, f_tb: 찾는중

부분난방에서 f_tb는 다음과 같이 계산됩니다:
(식 추가 요청, 보고서 116p 식 3.2.4-34)

Where, a_tb: 찾는중
한편 a_tb는 다음과 같이 계산됩니다:
(식 추가 요청, 보고서 116p 식 3.2.4-34 바로 밑에 있는 식)

만일 공간 및 시간적으로 제한된 난방가동의 조합은 다음 식을 활용합니다:
(식 추가 요청, 보고서 116p 식 3.2.4-35)
Where, V_i,NA: 야간 난방 분석 실내온도 계산을 위한 식에서의 v_i,h와 같습니다.

### 1.3.2.2. 냉방 분석 실내온도
요구온도보다 2K 정도의 허용된 온도상승이 유효계수를 통해 이미 고려되어 있기 때문에 냉방의 경우 월간분석에는 다음과 같이 2K이 감소된 분석 실내온도를 적용합니다.
(식 추가 요청, 보고서 117p 식 3.2.4-36)


---

한편 분석 존과 경계를 이루고 있는 비난방존 및 난방/냉방존의 온도는 각기 다른 방법으로 계산됩니다.

### 1.3.2.3. 비난방존 온도
분석 존과 경계를 이루는 비난방존 온도는 간략 또는 세부계산법 중 한가지를 택하여 계산합니다. (일반적으로 간략계산법이 세부계산법에 의한 온도보다 큰 값을 가짐)

#### 1.3.2.3.1 간략계산법
난방설비가 없는 지하실, 최하층, 최상층, 유리구조물, 계단실, 지중 등과 접하는 비난방존의 온도 v_u는 다음 식을 활용하여 계산합니다.
(식 추가 요청, 보고서 117p 식 3.2.4-37)

Where, 
v_i: 난방-분석실내온도 v_i,h 또는 냉방-분석실내온도v_i,c
F_x: 구조체의 온도보정계수

F_x의 값은 다음 표에 따라 결정됩니다:
(표 추가 요청, 보고서 118p 표 3.2.4-3)

#### 1.3.2.3.2. 상세계산법
상세계산법에 따른 비난방존의 온도는 DIN EN ISO 13789에 따라 다음과 같이 계산합니다:
(식 추가 요청, 보고서 118p 식 3.2.4-38)

이때 난방과 비난방건물 존 사이 벽체는 내부구조체로서 적용됩니다. 
만일 분석 존이 여러 개의 비난방존과 접하면 다음 식을 통해 온도를 결정합니다:

(식 추가 요청, 보고서 118p 식 3.2.4-39)


### 1.3.2.4. 난방/냉방존 온도
한편 분석존이 난방/냉방 존과 경계를 이루는 경우, 경계를 이루는 분석 존의 온도 v_z를 활용합니다.


<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>v_Z 산정 기준</title>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async
    src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
  </script>
  <style>
    body {
      font-family: "Malgun Gothic", sans-serif;
      text-align: center;
    }
    table {
      margin: auto;
      border-collapse: collapse;
      width: 60%;
    }
    th, td {
      border: 1px solid black;
      padding: 8px 12px;
      text-align: center;
    }
    th {
      background-color: #f2f2f2;
    }
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h3>&lt;표: \(v_{Z}\) 산정 기준&gt;</h3>

<table>
  <tr>
    <th>item</th>
    <th>\(v_{Z}\)</th>
  </tr>
  <tr>
    <td>난방 분석인 경우</td>
    <td class="highlight">(식 추가 요청, 보고서 119p 식 3.2.4-40)</td>
  </tr>
  <tr>
    <td>냉방 분석인 경우</td>
    <td class="highlight">(식 추가 요청, 보고서 119p 식 3.2.4-41)</td>
  </tr>
</table>

</body>
</html>
