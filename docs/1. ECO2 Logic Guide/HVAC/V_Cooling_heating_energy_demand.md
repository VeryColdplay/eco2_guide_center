# 공조처리를 반영한 냉방 및 난방 에너지요구량

## 공조처리에 필요한 에너지요구량
공조처리에 필요한 에너지요구량은 다음과 같이 계산됩니다:
<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("7", 2, 2) }}
  </div>
</div>

<!-- ✅ Where 이하: 완전히 별도의 블록으로 분리 -->
<div style="
  display: flex;
  justify-content: center;
  font-family: Pretendard, sans-serif;
  font-size: 15px;
  margin-top: 0px;
">
  <div style="
    text-align: left;
    line-height: 2;
    padding: 1px 24px;
    border-radius: 0px;
  ">
    <!-- Where 텍스트: 독립적, 굵고 이탤릭 -->
    <div style="
      font-style: italic;
      font-weight: bold;
      font-family: 'Times New Roman', 'Cambria Math', serif;
      margin-bottom: 1px;
    ">
      Where,
    </div>

    <!-- 수식 설명들: 왼쪽 정렬, Pretendard 유지 -->
    <span style="display: block;">\( q_{i,m} \) : 월별 풍량 당 공조에너지요구량 / 가동시간과 급기온도가 수정된 월별 단위풍량 당 공조에너지(i=H, C, St) 제시값</span>
    <span style="display: block;">\( V_{mech,m} \) : 월별 평균 급기풍량
  </div>
</div>


## q_i,m
월별 풍량 당 공조에너지요구량 / 가동시간과 급기온도가 수정된 월별 단위풍량 당 공조에너지(i=H, C, St) 제시값은 계산식 3.2.5-28, 3.2.5-29, 3.2.5-30, 3.2.5-35에 따라서 환산됩니다.
> 해당 내용 보고서에 없음

월별 풍량 당 공조에너지요구량 / 가동시간과 급기온도가 수정된 월별 단위풍량 당 공조에너지(i=H, C, St) 제시값은 다음과 같다:
3-28 식 불러오기
where
q_i,12h,m: 일일 12시간 가동조건에서의 월별 단위풍량 당 공조에너지((i=H, C, St)) 제시값
t_V,mech,m: 월별 일일 공조기기 가동시간
f_h,i:
d_V,mech,m: 월간 공조기기 가동 일수
d_max,m:

## V_mech,m
월별 평균 급기풍량은 정풍량 또는 정풍량 방식인지에 따라 여러 방식으로 계산됩니다.
이에 따른 월별 평균 급기풍량은 다음과 같습니다:

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("3", 1, 2) }}
    {{ include_equations("3", 4, 5) }}
  </div>
</div>

where (3-1)
V_mech,b,m
V*

where (3-2)
V_mech,b,m: .2.4의 월별 분석-풍량 (3.2.4는 보고서에 없음)
sigma V_j
t_V,mech,j,m
t_V,mech,m: 월별 일일 공조기기 가동시간
d_V,mech,m: 월간 공조기기 가동일수

where (3-4)
V_mech,b,m: 3.2.4의 월별 분석-풍량 (3.2.4는 보고서에 없음)
Q_c,b: 냉방 에너지요구량
t_V,mech,m: 월별 일일 공조기기 가동시간
dd_V,mech,m: 월간 공조기기 가동일수
c_p,L: 공기의 열수용율
rho_L: 공기 밀도
theta_i,c,m
theta_V,mech,m

where (3-5) << 뭔가 3-4의 연간 버전 같음. (보고서 139p에서는 월별 송풍된 급기풍량이라고 함)
sigma V
V_mech,b,m
Q_c,b: 냉방 에너지요구량
t_V,mech,m: 월별 일일 공조기기 가동시간
dV,mech,m
c_p,L: 공기의 열수용율
rho_L: 공기 밀도
theta_i,c,m
theta_V,mech,m

### 정풍량
3-1 불러오기

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("3", 1, 1) }}
  </div>
</div>


### 변풍량 (시간/용도에 따라 조절)
3-2 식 불러오기

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("3", 2, 2) }}
  </div>
</div>

### 변풍량 (실내 냉방부하에 따름)
근데 유기형박사님이 환기에너지요구량은 없다고 하셨는데 지금 내가 적고 있는 이 공조에너지요구량은 대체 그럼 뭐인거지...?

<div style="text-align: center; margin-top: 24px; margin-bottom: 8px;">
  <div style="
    display: inline-block;
    background-color: #F1F5F9;
    border-radius: 10px;
    padding: 16px 48px;
    line-height: 1.8;
    margin-top: 1em;
    margin-bottom: 0px;
  ">
    {{ include_equations("3", 4, 5) }}
  </div>
</div>

# 2.1. 가열, 냉각, 가습, 제습 에너지요구량

## 2.1.1. 공조처리에 필요한 에너지요구량
공조처리에 필요한 에너지요구량은 다음과 같다:
7-2 식 불러오기
where
q_i,m: 월별 풍량 당 공조에너지요구량 / 가동시간과 급기온도가 수정된 월별 단위풍량 당 공조에너지(i=H, C, St) 제시값
V_mech,m: 월별 평균 급기풍량

## q_i,m
계산식 3.2.5-28, 3.2.5-29, 3.2.5-30, 3.2.5-35에 따라서 환산된 월별 풍량 당 공조에너지요구량
>> 해당 내용 보고서에 없음

월별 풍량 당 공조에너지요구량 / 가동시간과 급기온도가 수정된 월별 단위풍량 당 공조에너지(i=H, C, St) 제시값은 다음과 같다:
3-28 식 불러오기
where
q_i,12h,m: 일일 12시간 가동조건에서의 월별 단위풍량 당 공조에너지((i=H, C, St)) 제시값
t_V,mech,m: 월별 일일 공조기기 가동시간
f_h,i:
d_V,mech,m: 월간 공조기기 가동 일수
d_max,m:

## V_mech,m
월별 평균 급기풍량은 정풍량 또는 정풍량 방식인지에 따라 여러 방식으로 계산된다.
이에 따른 월별 평균 급기풍량은 다음과 같다:
3-1, 3-2, 3-4, 3-5 불러오기

where (3-1)
V_mech,b,m
V*

where (3-2)
V_mech,b,m: .2.4의 월별 분석-풍량 (3.2.4는 보고서에 없음)
sigma V_j
t_V,mech,j,m
t_V,mech,m: 월별 일일 공조기기 가동시간
d_V,mech,m: 월간 공조기기 가동일수

where (3-4)
V_mech,b,m: 3.2.4의 월별 분석-풍량 (3.2.4는 보고서에 없음)
Q_c,b: 냉방 에너지요구량
t_V,mech,m: 월별 일일 공조기기 가동시간
dd_V,mech,m: 월간 공조기기 가동일수
c_p,L: 공기의 열수용율
rho_L: 공기 밀도
theta_i,c,m
theta_V,mech,m

where (3-5) << 뭔가 3-4의 연간 버전 같음. (보고서 139p에서는 월별 송풍된 급기풍량이라고 함)
sigma V
V_mech,b,m
Q_c,b: 냉방 에너지요구량
t_V,mech,m: 월별 일일 공조기기 가동시간
dV,mech,m
c_p,L: 공기의 열수용율
rho_L: 공기 밀도
theta_i,c,m
theta_V,mech,m

### 정풍량
3-2 불러오기

### 변풍량 (시간/용도에 따라 조절)
3-2 식 불러오기


### 변풍량 (실내 냉방부하에 따름)
근데 유기형박사님이 환기에너지요구량은 없다고 하셨는데 지금 내가 적고 있는 건 그럼 뭐인거지...?
3-4, 3-5 식 불러오기
