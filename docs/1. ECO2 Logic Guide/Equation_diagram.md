# Equation Diagram 
## 🔹 (Temporarily) Cooling Energy Demand Only
---

```mermaid
graph TD
    A["Heat Energy Calculation"] --> B["<div>$$Q = mc\Delta T$$</div>"]
    B --> C["<div>$$Q = (2 \times 1000) \times 4.18 \times (80 - 20)$$</div>"]
    C --> D["<div>$$Q = 502,000 \text{ J}$$</div>"]

    A --> E["<div>$$\frac{a}{b} = c$$</div>"]
    E --> F["<div>$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$</div>"]

    A --> G["<div>$$E = mc^2$$</div>"]
    G --> H["<div>$$\alpha + \beta = \gamma$$</div>"]
```


## Hee-Mind map sample
---

###TB ver.

```mermaid
graph TB
    %% 노드 정의
A["Qₕ.b.mth = d_op(1 - η_op)Q_source.op\\n+ d_we(1 - η_we)Q_source.we\\n(2-7)"]
B["Qₕ.c = (1 - η)Q_source\\n(2-1)"]
C["Q_source = Q_S + Q_T\\n+ Q_V + Q_I,source\\n(2-16)"]
D["η = (1 - γ) / (1 - γ^(α+1))\\nγ ≠ 1\\n(2-23)"]
E["η = a / (α + 1)\\nγ = 1\\n(2-24)"]
F["γ = Q_source / Q_sink\\n(2-21)"]

%% 노드 연결
A --> B
B --> C
B --> D
B --> E
D --> F
E --> F
F --> C

%% 노드 스타일
style A fill:#FFE0E0,stroke:#FFB6B6,stroke-width:2px
style B fill:#FFF4CC,stroke:#FFD966,stroke-width:2px
style C fill:#E2F0CB,stroke:#B6D7A8,stroke-width:2px
style D fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style E fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style F fill:#FCE5CD,stroke:#F6B26B,stroke-width:2px

%% 전체 그래프 스타일
linkStyle default stroke:#999,stroke-width:1.5px
```


###LR ver.
```mermaid
graph LR

%% 노드 정의
A["Qₕ.b.mth = d_op(1 - η_op)Q_source.op\\n+ d_we(1 - η_we)Q_source.we\\n(2-7)"]
B["Qₕ.c = (1 - η)Q_source\\n(2-1)"]
C["Q_source = Q_S + Q_T\\n+ Q_V + Q_I,source\\n(2-16)"]
D["η = (1 - γ) / (1 - γ^(α+1))\\nγ ≠ 1\\n(2-23)"]
E["η = a / (α + 1)\\nγ = 1\\n(2-24)"]
F["γ = Q_source / Q_sink\\n(2-21)"]

%% 노드 연결
A --> B
B --> C
B --> D
B --> E
D --> F
E --> F
F --> C

%% 노드 스타일
style A fill:#FFE0E0,stroke:#FFB6B6,stroke-width:2px
style B fill:#FFF4CC,stroke:#FFD966,stroke-width:2px
style C fill:#E2F0CB,stroke:#B6D7A8,stroke-width:2px
style D fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style E fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style F fill:#FCE5CD,stroke:#F6B26B,stroke-width:2px

%% 전체 그래프 스타일
linkStyle default stroke:#999,stroke-width:1.5px
```


###TB+LR ver.
```mermaid
graph TB

%% 상단 주요 흐름 (세로)
A["Qₕ.b.mth = d_op(1 - η_op)Q_source.op\\n+ d_we(1 - η_we)Q_source.we\\n(2-7)"]
B["Qₕ.c = (1 - η)Q_source\\n(2-1)"]
C["Q_source = Q_S + Q_T\\n+ Q_V + Q_I,source\\n(2-16)"]
F["γ = Q_source / Q_sink\\n(2-21)"]

A --> B
B --> C
F --> C

%% η 관련 수식 (가로 subgraph로 묶기)
subgraph ETA["η 정의"]
  direction LR
  D["η = (1 - γ) / (1 - γ^(α+1))\\nγ ≠ 1\\n(2-23)"]
  E["η = a / (α + 1)\\nγ = 1\\n(2-24)"]
end

B --> D
B --> E
D --> F
E --> F

%% 노드 스타일
style A fill:#FFE0E0,stroke:#FFB6B6,stroke-width:2px
style B fill:#FFF4CC,stroke:#FFD966,stroke-width:2px
style C fill:#E2F0CB,stroke:#B6D7A8,stroke-width:2px
style D fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style E fill:#D9E1F2,stroke:#A4C2F4,stroke-width:2px
style F fill:#FCE5CD,stroke:#F6B26B,stroke-width:2px

linkStyle default stroke:#999,stroke-width:1.5px
```