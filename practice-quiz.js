// Add neon effects to practice page
function addPracticeNeonEffects() {
    const practiceContainer = document.querySelector('.practice-container');
    if (!practiceContainer) return;
    
    // Create additional neon orbs specifically for practice page
    const neonBg = document.querySelector('.neon-bg');
    if (neonBg) {
        const practiceOrbs = document.createElement('div');
        practiceOrbs.className = 'practice-neon-orbs';
        practiceOrbs.style.position = 'fixed';
        practiceOrbs.style.top = '0';
        practiceOrbs.style.left = '0';
        practiceOrbs.style.width = '100%';
        practiceOrbs.style.height = '100%';
        practiceOrbs.style.zIndex = '-1';
        practiceOrbs.style.pointerEvents = 'none';
        
        // Add special practice-themed particles
        for (let i = 0; i < 8; i++) {
            const orb = document.createElement('div');
            orb.style.position = 'absolute';
            orb.style.width = `${Math.random() * 40 + 20}px`;
            orb.style.height = orb.style.width;
            orb.style.background = `radial-gradient(circle, rgba(${Math.random() * 100}, ${150 + Math.random() * 105}, 255, 0.2), transparent 70%)`;
            orb.style.borderRadius = '50%';
            orb.style.filter = 'blur(15px)';
            orb.style.left = `${Math.random() * 100}%`;
            orb.style.top = `${Math.random() * 100}%`;
            orb.style.animation = `float ${15 + Math.random() * 20}s infinite linear`;
            orb.style.animationDelay = `-${Math.random() * 20}s`;
            practiceOrbs.appendChild(orb);
        }
        
        neonBg.appendChild(practiceOrbs);
    }
}

// Quiz Data - 20 questions for each of the 10 topics (200 total questions)
const quizData = {
    "topic1": {
        title: "Exploring Accumulations of Change",
        questions: [
            {
                question: "Water drips into a bucket at a rate of r(t) = 0.5t liters per minute. How much water is added between t=2 and t=6 minutes?",
                options: [
                    "6 liters",
                    "8 liters",
                    "10 liters",
                    "12 liters"
                ],
                correct: 1,
                explanation: "The accumulation is the area under r(t)=0.5t from 2 to 6. This is a trapezoid: Area = 1/2 × base × (height1 + height2) = 1/2 × 4 × (1 + 3) = 8 liters."
            },
            {
                question: "A car travels at constant velocity of 20 m/s for 5 seconds. What is the total distance traveled?",
                options: [
                    "50 meters",
                    "100 meters",
                    "150 meters",
                    "200 meters"
                ],
                correct: 1,
                explanation: "Distance = rate × time = 20 m/s × 5 s = 100 meters."
            },
            {
                question: "Population grows at 30 people/year. If initial population is 1000, what is population after 10 years?",
                options: [
                    "1100 people",
                    "1200 people",
                    "1300 people",
                    "1400 people"
                ],
                correct: 2,
                explanation: "Accumulation = 30 people/year × 10 years = 300 people. Total = 1000 + 300 = 1300 people."
            },
            {
                question: "Snow falls at 2 inches/hour for 3 hours, then stops. Total snow after 5 hours?",
                options: [
                    "4 inches",
                    "6 inches",
                    "8 inches",
                    "10 inches"
                ],
                correct: 1,
                explanation: "Rate is 2 inches/hour from t=0 to 3, and 0 from t=3 to 5. Total = 2 × 3 + 0 × 2 = 6 inches."
            },
            {
                question: "Which represents the accumulation of change from t=a to t=b?",
                options: [
                    "The maximum rate of change",
                    "The area under the rate curve",
                    "The slope of the rate curve",
                    "The average rate of change"
                ],
                correct: 1,
                explanation: "Accumulation of change over an interval equals the area under the rate-of-change curve between those points."
            },
            {
                question: "If a car's velocity is v(t) = 3t m/s, what is the displacement from t=0 to t=4 seconds?",
                options: [
                    "12 meters",
                    "16 meters",
                    "24 meters",
                    "48 meters"
                ],
                correct: 2,
                explanation: "Displacement = ∫₀⁴ 3t dt = [3t²/2]₀⁴ = (3×16)/2 - 0 = 24 meters."
            },
            {
                question: "Rain collects in a barrel at rate r(t)=2+0.1t liters/hour. How much collects from t=0 to t=10 hours?",
                options: [
                    "20 liters",
                    "25 liters",
                    "30 liters",
                    "35 liters"
                ],
                correct: 1,
                explanation: "∫₀¹⁰ (2+0.1t) dt = [2t + 0.05t²]₀¹⁰ = 20 + 5 = 25 liters."
            },
            {
                question: "A bacteria culture grows at 1000e^(0.2t) bacteria/hour. Approximate growth from t=0 to t=1 hour.",
                options: [
                    "220 bacteria",
                    "1220 bacteria",
                    "1820 bacteria",
                    "2220 bacteria"
                ],
                correct: 1,
                explanation: "Approximate using average: At t=0: 1000, at t=1: 1221. Average ≈ 1110.5 × 1 = 1110.5 ≈ 1220."
            },
            {
                question: "If marginal cost is C'(x)=2x+10 dollars/item, find total cost increase from producing 0 to 5 items.",
                options: [
                    "$25",
                    "$50",
                    "$75",
                    "$100"
                ],
                correct: 2,
                explanation: "∫₀⁵ (2x+10) dx = [x²+10x]₀⁵ = 25+50 = $75."
            },
            {
                question: "A train accelerates from 0 to 60 km/h at constant acceleration over 30 seconds. Distance traveled?",
                options: [
                    "0.125 km",
                    "0.25 km",
                    "0.5 km",
                    "1 km"
                ],
                correct: 1,
                explanation: "Average speed = 30 km/h = 8.33 m/s. Time = 30s. Distance = 8.33 × 30 = 250m = 0.25 km."
            },
            // NEW QUESTIONS 11-20
            {
                question: "If f(t) represents the rate of water flow (L/min), then ∫ₐᵇ f(t) dt represents:",
                options: [
                    "The flow rate at time b",
                    "The total volume of water from time a to b",
                    "The average flow rate",
                    "The maximum flow rate"
                ],
                correct: 1,
                explanation: "The integral of a rate function gives the total accumulation over the interval."
            },
            {
                question: "A car's speed increases from 20 to 40 m/s over 4 seconds at constant acceleration. Distance traveled?",
                options: [
                    "80 m",
                    "100 m",
                    "120 m",
                    "140 m"
                ],
                correct: 2,
                explanation: "Average speed = (20+40)/2 = 30 m/s. Distance = 30 × 4 = 120 m."
            },
            {
                question: "Which quantity represents an accumulation?",
                options: [
                    "Velocity (m/s)",
                    "Acceleration (m/s²)",
                    "Distance (m)",
                    "Rate of change"
                ],
                correct: 2,
                explanation: "Distance is an accumulation of velocity over time."
            },
            {
                question: "If oil leaks at 0.5 + 0.1t gallons/hour, how much leaks in first 2 hours?",
                options: [
                    "0.7 gallons",
                    "1.2 gallons",
                    "1.4 gallons",
                    "1.8 gallons"
                ],
                correct: 1,
                explanation: "∫₀² (0.5+0.1t) dt = [0.5t + 0.05t²]₀² = 1 + 0.2 = 1.2 gallons."
            },
            {
                question: "The area under a velocity-time graph represents:",
                options: [
                    "Acceleration",
                    "Displacement",
                    "Speed",
                    "Time"
                ],
                correct: 1,
                explanation: "Area under velocity curve gives displacement (change in position)."
            },
            {
                question: "If revenue rate is R'(t)=100+20t $/day, revenue from day 0 to 7 is:",
                options: [
                    "$770",
                    "$840",
                    "$910",
                    "$1190"
                ],
                correct: 3,
                explanation: "∫₀⁷ (100+20t) dt = [100t+10t²]₀⁷ = 700+490 = $1190."
            },
            {
                question: "Which is NOT an accumulation process?",
                options: [
                    "Distance traveled from velocity",
                    "Total cost from marginal cost",
                    "Population from growth rate",
                    "Slope from rate of change"
                ],
                correct: 3,
                explanation: "Slope is instantaneous rate, not accumulation."
            },
            {
                question: "Water drains at 10-0.5t L/min. How much drains from t=0 to t=10 min?",
                options: [
                    "25 L",
                    "50 L",
                    "75 L",
                    "100 L"
                ],
                correct: 2,
                explanation: "∫₀¹⁰ (10-0.5t) dt = [10t-0.25t²]₀¹⁰ = 100-25 = 75 L."
            },
            {
                question: "The concept of accumulation is fundamental to:",
                options: [
                    "Differentiation",
                    "Integration",
                    "Limits",
                    "Derivatives"
                ],
                correct: 1,
                explanation: "Integration is the mathematical process of accumulation."
            },
            {
                question: "If f(t) is negative on [a,b], the accumulation ∫ₐᵇ f(t) dt is:",
                options: [
                    "Always positive",
                    "Always negative",
                    "Zero",
                    "Cannot determine"
                ],
                correct: 1,
                explanation: "If f(t) < 0, the 'area' is below x-axis, giving negative accumulation."
            }
        ]
    },
    "topic2": {
        title: "Approximating Areas with Riemann Sums",
        questions: [
            {
                question: "What does a Left Riemann Sum use for the height of each rectangle?",
                options: [
                    "The function value at the left endpoint",
                    "The function value at the right endpoint",
                    "The function value at the midpoint",
                    "The average of left and right endpoints"
                ],
                correct: 0,
                explanation: "Left Riemann Sum uses the function value at the left endpoint of each subinterval as the rectangle height."
            },
            {
                question: "Approximate ∫₀² x² dx using Left Riemann Sum with n=4. Δx = ?",
                options: [
                    "0.25",
                    "0.5",
                    "0.75",
                    "1.0"
                ],
                correct: 1,
                explanation: "Δx = (b-a)/n = (2-0)/4 = 0.5"
            },
            {
                question: "Which Riemann Sum typically gives the most accurate approximation?",
                options: [
                    "Left Riemann Sum",
                    "Right Riemann Sum",
                    "Midpoint Riemann Sum",
                    "They are all equally accurate"
                ],
                correct: 2,
                explanation: "Midpoint Riemann Sum generally gives the most accurate approximation because it balances over- and under-estimation."
            },
            {
                question: "For a decreasing function on [a,b], which sum gives an overestimate?",
                options: [
                    "Left Riemann Sum",
                    "Right Riemann Sum",
                    "Midpoint Riemann Sum",
                    "Trapezoidal Rule"
                ],
                correct: 0,
                explanation: "For a decreasing function, Left Riemann Sum uses higher values (at left endpoints) so it overestimates the area."
            },
            {
                question: "As n approaches infinity, what happens to Riemann Sum approximations?",
                options: [
                    "They become less accurate",
                    "They approach the exact area",
                    "They approach zero",
                    "They become undefined"
                ],
                correct: 1,
                explanation: "As n→∞, the width Δx→0, and Riemann Sums approach the exact value of the definite integral."
            },
            {
                question: "For f(x)=x² on [0,2] with n=2, Right Riemann Sum = ?",
                options: [
                    "1",
                    "4",
                    "5",
                    "8"
                ],
                correct: 2,
                explanation: "Δx=1, heights: f(1)=1, f(2)=4. Sum = 1×1 + 1×4 = 5."
            },
            {
                question: "Trapezoidal Rule approximates area using:",
                options: [
                    "Rectangles",
                    "Triangles",
                    "Trapezoids",
                    "Parabolas"
                ],
                correct: 2,
                explanation: "Trapezoidal Rule approximates area using trapezoids connecting function values at endpoints."
            },
            {
                question: "For concave up function, which approximation underestimates the area?",
                options: [
                    "Left Riemann",
                    "Right Riemann",
                    "Midpoint",
                    "Trapezoidal"
                ],
                correct: 3,
                explanation: "For concave up functions, trapezoidal rule underestimates the true area."
            },
            {
                question: "With n=100 subintervals, Riemann Sum is:",
                options: [
                    "Always exact",
                    "More accurate than with n=10",
                    "Less accurate than with n=10",
                    "Unrelated to accuracy"
                ],
                correct: 1,
                explanation: "More subintervals (larger n) generally give more accurate approximations."
            },
            {
                question: "If f(x) ≥ 0 on [a,b], Riemann Sum approximates:",
                options: [
                    "Derivative",
                    "Slope",
                    "Area under curve",
                    "Average value"
                ],
                correct: 2,
                explanation: "For non-negative functions, Riemann Sum approximates the area between the curve and x-axis."
            },
            // NEW QUESTIONS 11-20
            {
                question: "For f(x)=x on [0,3] with n=3, Left Riemann Sum = ?",
                options: [
                    "1.5",
                    "3",
                    "4.5",
                    "6"
                ],
                correct: 1,
                explanation: "Δx=1, heights: f(0)=0, f(1)=1, f(2)=2. Sum = 1×0 + 1×1 + 1×2 = 3."
            },
            {
                question: "Simpson's Rule uses what to approximate areas?",
                options: [
                    "Rectangles",
                    "Trapezoids",
                    "Parabolas",
                    "Lines"
                ],
                correct: 2,
                explanation: "Simpson's Rule approximates areas using parabolic arcs."
            },
            {
                question: "The limit of Riemann Sums as n→∞ equals:",
                options: [
                    "The derivative",
                    "The definite integral",
                    "The antiderivative",
                    "The average value"
                ],
                correct: 1,
                explanation: "The definite integral is defined as the limit of Riemann Sums."
            },
            {
                question: "For increasing function, Left Riemann Sum:",
                options: [
                    "Overestimates",
                    "Underestimates",
                    "Is exact",
                    "Cannot determine"
                ],
                correct: 1,
                explanation: "For increasing functions, Left Riemann uses lower values at left endpoints, so it underestimates."
            },
            {
                question: "Which requires even n?",
                options: [
                    "Left Riemann",
                    "Right Riemann",
                    "Midpoint",
                    "Simpson's Rule"
                ],
                correct: 3,
                explanation: "Simpson's Rule requires an even number of subintervals."
            },
            {
                question: "For f(x)=3 on [1,5] with any n, all Riemann Sums give:",
                options: [
                    "3",
                    "12",
                    "15",
                    "Depends on n"
                ],
                correct: 1,
                explanation: "Constant function: Area = height × width = 3 × 4 = 12."
            },
            {
                question: "The notation Σ f(x_i*)Δx represents:",
                options: [
                    "A derivative",
                    "A Riemann Sum",
                    "An antiderivative",
                    "A limit"
                ],
                correct: 1,
                explanation: "Σ f(x_i*)Δx is the Riemann Sum notation."
            },
            {
                question: "Which approximation is most accurate for linear functions?",
                options: [
                    "Left Riemann",
                    "All are equally accurate",
                    "Trapezoidal",
                    "Midpoint"
                ],
                correct: 1,
                explanation: "For linear functions, Left, Right, Midpoint, and Trapezoidal all give exact area."
            },
            {
                question: "Regular partition means:",
                options: [
                    "All Δx are equal",
                    "All heights are equal",
                    "n is even",
                    "Function is regular"
                ],
                correct: 0,
                explanation: "Regular partition means equal subinterval widths."
            },
            {
                question: "Riemann Sums approximate integrals by:",
                options: [
                    "Finding exact antiderivatives",
                    "Summing areas of rectangles/trapezoids",
                    "Taking derivatives",
                    "Solving equations"
                ],
                correct: 1,
                explanation: "Riemann Sums approximate integrals by summing areas of simple shapes."
            }
        ]
    },
    "topic3": {
        title: "The Fundamental Theorem of Calculus",
        questions: [
            {
                question: "If F(x) = ∫₀ˣ f(t) dt, then F'(x) = ?",
                options: [
                    "f'(x)",
                    "f(x)",
                    "F(x)",
                    "0"
                ],
                correct: 1,
                explanation: "FTC Part 1 states: d/dx [∫ₐˣ f(t) dt] = f(x)"
            },
            {
                question: "∫ₐᵇ f(x) dx = F(b) - F(a) where:",
                options: [
                    "F(x) is any function",
                    "F'(x) = f(x)",
                    "F(x) = f'(x)",
                    "F(x) is continuous"
                ],
                correct: 1,
                explanation: "FTC Part 2: If F is an antiderivative of f, then ∫ₐᵇ f(x) dx = F(b) - F(a)"
            },
            {
                question: "d/dx [∫₅ˣ sin(t²) dt] = ?",
                options: [
                    "sin(x²)",
                    "cos(x²)",
                    "2x sin(x²)",
                    "sin(25)"
                ],
                correct: 0,
                explanation: "By FTC Part 1: d/dx [∫ₐˣ f(t) dt] = f(x), so here f(x) = sin(x²)"
            },
            {
                question: "If G(x) = ∫ₓ³ e^(t³) dt, find G'(x)",
                options: [
                    "e^(x³)",
                    "-e^(x³)",
                    "3x² e^(x³)",
                    "-3x² e^(x³)"
                ],
                correct: 1,
                explanation: "First flip limits: G(x) = -∫₃ˣ e^(t³) dt, then G'(x) = -e^(x³)"
            },
            {
                question: "∫₁⁴ 2x dx = ?",
                options: [
                    "15",
                    "16",
                    "17",
                    "18"
                ],
                correct: 0,
                explanation: "Antiderivative is x². Evaluate: 4² - 1² = 16 - 1 = 15"
            },
            {
                question: "d/dx [∫₀^(x²) √t dt] = ?",
                options: [
                    "√(x²)",
                    "2x√x",
                    "x",
                    "2x√(x²)"
                ],
                correct: 3,
                explanation: "Let u=x², by Chain Rule: d/dx [∫₀ᵘ √t dt] = √u × 2x = √(x²) × 2x = 2x√(x²)"
            },
            {
                question: "FTC connects which two main concepts of calculus?",
                options: [
                    "Limits and continuity",
                    "Derivatives and integrals",
                    "Sequences and series",
                    "Algebra and geometry"
                ],
                correct: 1,
                explanation: "FTC establishes the relationship between differentiation and integration."
            },
            {
                question: "If F(x)=∫₀ˣ cos(t²)dt, then F''(x) = ?",
                options: [
                    "cos(x²)",
                    "-2x sin(x²)",
                    "sin(x²)",
                    "2x cos(x²)"
                ],
                correct: 1,
                explanation: "F'(x)=cos(x²), F''(x)=-2x sin(x²) by Chain Rule."
            },
            {
                question: "Evaluate ∫₁⁴ (3/x) dx using FTC",
                options: [
                    "3 ln 2",
                    "3 ln 4",
                    "ln 12",
                    "ln 64"
                ],
                correct: 1,
                explanation: "Antiderivative is 3 ln|x|. 3(ln4 - ln1) = 3 ln4."
            },
            {
                question: "What's wrong: d/dx [∫₀ˣ² f(t) dt] = f(x²)",
                options: [
                    "Nothing, it's correct",
                    "Missing chain rule factor 2x",
                    "Should be f'(x²)",
                    "Limits are wrong"
                ],
                correct: 1,
                explanation: "Should be f(x²) × 2x by Chain Rule."
            },
            // NEW QUESTIONS 11-20
            {
                question: "FTC Part 1: If A(x)=∫ₐˣ f(t) dt, then A'(x)=?",
                options: [
                    "f'(x)",
                    "f(x)",
                    "A(x)",
                    "0"
                ],
                correct: 1,
                explanation: "FTC Part 1 states derivative of accumulation function is the original function."
            },
            {
                question: "FTC allows us to evaluate ∫ₐᵇ f(x) dx by:",
                options: [
                    "Taking derivatives",
                    "Finding any antiderivative F",
                    "Averaging endpoints",
                    "Using Riemann Sums"
                ],
                correct: 1,
                explanation: "FTC Part 2: ∫ₐᵇ f(x) dx = F(b) - F(a) where F'(x)=f(x)."
            },
            {
                question: "If f is continuous on [a,b], then d/dx[∫ₐˣ f(t) dt] exists and equals:",
                options: [
                    "f'(x)",
                    "f(x)",
                    "∫ f(x) dx",
                    "F(x)"
                ],
                correct: 1,
                explanation: "This is the statement of FTC Part 1."
            },
            {
                question: "The function F(x)=∫₀ˣ sin(t²) dt is:",
                options: [
                    "An antiderivative of sin(x²)",
                    "The derivative of sin(x²)",
                    "Equal to sin(x²)",
                    "A Riemann Sum"
                ],
                correct: 0,
                explanation: "By FTC, F'(x)=sin(x²), so F is an antiderivative of sin(x²)."
            },
            {
                question: "FTC shows differentiation and integration are:",
                options: [
                    "Unrelated",
                    "Inverse processes",
                    "The same",
                    "Opposites"
                ],
                correct: 1,
                explanation: "FTC shows differentiation and integration are inverse operations."
            },
            {
                question: "If F'(x)=f(x), then ∫ₐᵇ f(x) dx = ?",
                options: [
                    "F'(b)-F'(a)",
                    "F(b)-F(a)",
                    "f(b)-f(a)",
                    "F(x)"
                ],
                correct: 1,
                explanation: "This is FTC Part 2 in simplest form."
            },
            {
                question: "For constant function f(x)=c, ∫₀ˣ f(t) dt = ?",
                options: [
                    "c",
                    "cx",
                    "c/x",
                    "0"
                ],
                correct: 1,
                explanation: "∫₀ˣ c dt = c·x"
            },
            {
                question: "FTC is fundamental because it:",
                options: [
                    "Defines derivatives",
                    "Connects differential and integral calculus",
                    "Solves all equations",
                    "Is easy to use"
                ],
                correct: 1,
                explanation: "FTC unites the two main branches of calculus."
            },
            {
                question: "If g(x)=∫₀^(sin x) t³ dt, then g'(x)=?",
                options: [
                    "sin³x",
                    "cos x sin³x",
                    "3x²",
                    "cos x"
                ],
                correct: 1,
                explanation: "g'(x)= (sin x)³ × cos x = cos x sin³x"
            },
            {
                question: "The Mean Value Theorem for Integrals is related to FTC because:",
                options: [
                    "They're the same",
                    "Both involve averages",
                    "FTC can prove MVT for integrals",
                    "No relation"
                ],
                correct: 2,
                explanation: "FTC can be used to prove the Mean Value Theorem for Integrals."
            }
        ]
    },
    "topic4": {
        title: "Interpreting Accumulation Functions",
        questions: [
            {
                question: "If f(t) is positive on (1,3), what happens to A(x)=∫₁ˣ f(t) dt on this interval?",
                options: [
                    "A(x) is decreasing",
                    "A(x) is increasing",
                    "A(x) is constant",
                    "A(x) is concave down"
                ],
                correct: 1,
                explanation: "A'(x) = f(x). When f(x) > 0, A'(x) > 0, so A(x) is increasing."
            },
            {
                question: "If velocity is positive then negative, when is displacement maximum?",
                options: [
                    "At the start",
                    "When velocity is maximum",
                    "When velocity changes from + to -",
                    "At the end"
                ],
                correct: 2,
                explanation: "Displacement increases while velocity > 0 and decreases while velocity < 0. Maximum occurs when velocity changes from positive to negative."
            },
            {
                question: "If f(t) is below x-axis from t=2 to t=5, what does ∫₂⁵ f(t) dt represent?",
                options: [
                    "Positive area",
                    "Negative area",
                    "Net area",
                    "Slope"
                ],
                correct: 1,
                explanation: "When f(t) < 0, the 'area' is below the x-axis and contributes negatively to the integral."
            },
            {
                question: "For f(t)=t-2 on [0,4], when does F(x)=∫₀ˣ f(t) dt have a minimum?",
                options: [
                    "x=0",
                    "x=2",
                    "x=3",
                    "x=4"
                ],
                correct: 1,
                explanation: "F'(x)=x-2. Critical point at x=2. F decreases for x<2, increases for x>2, so min at x=2."
            },
            {
                question: "What does ∫ₐᵇ |f(x)| dx represent geometrically?",
                options: [
                    "Net signed area",
                    "Total area (always positive)",
                    "Average value",
                    "Slope"
                ],
                correct: 1,
                explanation: "|f(x)| makes all values positive, so ∫ₐᵇ |f(x)| dx gives total area between curve and x-axis."
            },
            {
                question: "If A(x)=∫₀ˣ f(t) dt and f changes from negative to positive at x=c, then at x=c:",
                options: [
                    "A has a maximum",
                    "A has a minimum",
                    "A has inflection point",
                    "A is constant"
                ],
                correct: 1,
                explanation: "A'(x)=f(x) changes from - to + at x=c, so A has a local minimum at c."
            },
            {
                question: "Given v(t) graph, how find when object returns to start?",
                options: [
                    "When v(t)=0",
                    "When ∫ v(t) dt = 0",
                    "When v(t) maximum",
                    "When v(t) changes sign"
                ],
                correct: 1,
                explanation: "Return to start means net displacement = 0 = ∫ v(t) dt."
            },
            {
                question: "For accumulation function A(x)=∫₀ˣ f(t) dt, A''(x) tells us about:",
                options: [
                    "Value of accumulation",
                    "Rate of accumulation",
                    "Concavity of accumulation",
                    "All of the above"
                ],
                correct: 2,
                explanation: "A'(x)=f(x), A''(x)=f'(x) tells concavity of accumulation function."
            },
            {
                question: "If f is rate of water flow (L/min), ∫ f(t) dt gives:",
                options: [
                    "Flow rate at time t",
                    "Total volume of water",
                    "Average flow rate",
                    "Maximum flow"
                ],
                correct: 1,
                explanation: "Integral of flow rate gives total volume accumulated."
            },
            {
                question: "Net area = 0 means:",
                options: [
                    "No area under curve",
                    "Area above = area below x-axis",
                    "Function is zero",
                    "Cannot happen"
                ],
                correct: 1,
                explanation: "Net area = 0 means positive and negative areas cancel exactly."
            },
            // NEW QUESTIONS 11-20
            {
                question: "If f is acceleration, then ∫ f(t) dt gives:",
                options: [
                    "Position",
                    "Velocity",
                    "Speed",
                    "Distance"
                ],
                correct: 1,
                explanation: "Integral of acceleration gives change in velocity."
            },
            {
                question: "A(x)=∫₀ˣ f(t) dt is decreasing when:",
                options: [
                    "f(x) > 0",
                    "f(x) < 0",
                    "f'(x) > 0",
                    "f'(x) < 0"
                ],
                correct: 1,
                explanation: "A'(x)=f(x), so A decreases when f(x) < 0."
            },
            {
                question: "The accumulation function always passes through:",
                options: [
                    "(0,0)",
                    "(a,0) where a is lower limit",
                    "The origin",
                    "Depends on function"
                ],
                correct: 1,
                explanation: "If A(x)=∫ₐˣ f(t) dt, then A(a)=∫ₐᵃ f(t) dt = 0."
            },
            {
                question: "If f oscillates between positive and negative, A(x)=∫₀ˣ f(t) dt:",
                options: [
                    "Always increases",
                    "Always decreases",
                    "Oscillates",
                    "Is constant"
                ],
                correct: 2,
                explanation: "A(x) increases when f>0, decreases when f<0, so it oscillates."
            },
            {
                question: "For f(t)=sin t, A(π)=∫₀^π sin t dt = ?",
                options: [
                    "0",
                    "1",
                    "2",
                    "π"
                ],
                correct: 2,
                explanation: "∫ sin t dt = -cos t, so -cos π - (-cos 0) = 1 - (-1) = 2."
            },
            {
                question: "If total area from a to b is 10, but net area is 2, then:",
                options: [
                    "f is always positive",
                    "Area below x-axis = 8",
                    "Area above x-axis = 8",
                    "Function crosses axis"
                ],
                correct: 3,
                explanation: "Net area (2) ≠ total area (10) means function has both positive and negative parts."
            },
            {
                question: "The average value of f on [a,b] equals:",
                options: [
                    "f((a+b)/2)",
                    "(1/(b-a))∫ₐᵇ f(x) dx",
                    "∫ₐᵇ f(x) dx",
                    "f(b)-f(a)"
                ],
                correct: 1,
                explanation: "Average value = (1/(b-a))∫ₐᵇ f(x) dx."
            },
            {
                question: "If A(x)=∫₀ˣ f(t) dt has inflection point at x=c, then:",
                options: [
                    "f(c)=0",
                    "f'(c)=0",
                    "A(c)=0",
                    "f''(c)=0"
                ],
                correct: 1,
                explanation: "A''(x)=f'(x), so inflection point when f'(c)=0."
            },
            {
                question: "Interpretation: ∫₀¹⁰ P'(t) dt = 500 where P(t) is population",
                options: [
                    "Population at t=10 is 500",
                    "Population increased by 500",
                    "Growth rate is 500",
                    "Average population is 500"
                ],
                correct: 1,
                explanation: "∫ P'(t) dt = P(10)-P(0) = change in population = 500."
            },
            {
                question: "If f represents marginal profit, then ∫ f(x) dx represents:",
                options: [
                    "Profit at x",
                    "Total profit",
                    "Average profit",
                    "Rate of profit"
                ],
                correct: 1,
                explanation: "Integral of marginal (rate) gives total quantity."
            }
        ]
    },
    "topic5": {
        title: "Properties of Definite Integrals",
        questions: [
            {
                question: "∫ₐᵇ [f(x) + g(x)] dx = ?",
                options: [
                    "∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx",
                    "∫ₐᵇ f(x) dx × ∫ₐᵇ g(x) dx",
                    "∫ₐᵇ f(x) dx - ∫ₐᵇ g(x) dx",
                    "Cannot be determined"
                ],
                correct: 0,
                explanation: "Additivity: ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx"
            },
            {
                question: "∫ₐᵇ f(x) dx = -∫ₐᵇ f(x) dx. True or False?",
                options: [
                    "True",
                    "False"
                ],
                correct: 1,
                explanation: "False. Correct property: ∫ₐᵇ f(x) dx = -∫ₐᵇ f(x) dx (reversing limits changes sign)"
            },
            {
                question: "If f is odd and ∫₀³ f(x) dx = 5, what is ∫₋₃³ f(x) dx?",
                options: [
                    "0",
                    "5",
                    "10",
                    "-5"
                ],
                correct: 0,
                explanation: "For odd functions, ∫₋ₐᵃ f(x) dx = 0 (symmetric cancellation)"
            },
            {
                question: "∫ₐᶜ f(x) dx = ∫ₐᵇ f(x) dx + ∫ₐᶜ f(x) dx. What's wrong?",
                options: [
                    "Nothing, it's correct",
                    "Should be ∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx",
                    "Should be ∫ₐᵇ f(x) dx - ∫ᵇᶜ f(x) dx",
                    "Cannot combine intervals"
                ],
                correct: 1,
                explanation: "Additivity over intervals: ∫ₐᶜ f(x) dx = ∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx"
            },
            {
                question: "If m ≤ f(x) ≤ M on [a,b], then:",
                options: [
                    "m(b-a) ≤ ∫ₐᵇ f(x) dx ≤ M(b-a)",
                    "M(b-a) ≤ ∫ₐᵇ f(x) dx ≤ m(b-a)",
                    "m ≤ ∫ₐᵇ f(x) dx ≤ M",
                    "None of the above"
                ],
                correct: 0,
                explanation: "Bounds for integrals: If m ≤ f(x) ≤ M on [a,b], then m(b-a) ≤ ∫ₐᵇ f(x) dx ≤ M(b-a)"
            },
            {
                question: "∫ₐᵇ k·f(x) dx = ? (k constant)",
                options: [
                    "k ∫ₐᵇ f(x) dx",
                    "∫ₐᵇ k dx · ∫ₐᵇ f(x) dx",
                    "k + ∫ₐᵇ f(x) dx",
                    "None"
                ],
                correct: 0,
                explanation: "Constant multiple property: ∫ₐᵇ k·f(x) dx = k ∫ₐᵇ f(x) dx"
            },
            {
                question: "If f(x) ≤ g(x) on [a,b], then:",
                options: [
                    "∫ₐᵇ f(x) dx ≤ ∫ₐᵇ g(x) dx",
                    "∫ₐᵇ f(x) dx ≥ ∫ₐᵇ g(x) dx",
                    "They're equal",
                    "Cannot compare"
                ],
                correct: 0,
                explanation: "Comparison property: If f(x) ≤ g(x) on [a,b], then ∫ₐᵇ f(x) dx ≤ ∫ₐᵇ g(x) dx"
            },
            {
                question: "∫ₐᵇ f(x) dx + ∫ᵇᶜ f(x) dx = ?",
                options: [
                    "∫ₐᶜ f(x) dx",
                    "∫ₐᵇ f(x) dx",
                    "0",
                    "∫ᵇᶜ f(x) dx"
                ],
                correct: 0,
                explanation: "Additivity over adjacent intervals."
            },
            {
                question: "For even function f, ∫₋ₐᵃ f(x) dx = ?",
                options: [
                    "0",
                    "2∫₀ᵃ f(x) dx",
                    "∫₀ᵃ f(x) dx",
                    "Cannot simplify"
                ],
                correct: 1,
                explanation: "For even functions: ∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx"
            },
            {
                question: "If ∫₁³ f(x) dx = 4 and ∫₃⁵ f(x) dx = -1, then ∫₁⁵ f(x) dx = ?",
                options: [
                    "3",
                    "5",
                    "-3",
                    "-5"
                ],
                correct: 0,
                explanation: "∫₁⁵ = ∫₁³ + ∫₃⁵ = 4 + (-1) = 3"
            },
            // NEW QUESTIONS 11-20
            {
                question: "∫ₐᵇ f(x) dx = 0 always means:",
                options: [
                    "f(x)=0 for all x",
                    "Area above = area below",
                    "Function is odd",
                    "Not enough information"
                ],
                correct: 3,
                explanation: "Many possibilities: f could be odd on symmetric interval, or positive/negative areas cancel."
            },
            {
                question: "If f is periodic with period T, then ∫₀^T f(x) dx = ∫ₐ^(a+T) f(x) dx:",
                options: [
                    "Always true",
                    "Sometimes true",
                    "Never true",
                    "Only for even functions"
                ],
                correct: 0,
                explanation: "For periodic functions, integral over one full period is constant regardless of starting point."
            },
            {
                question: "∫ₐᵇ f(x) dx = ∫ₐᵇ f(a+b-x) dx. This property is:",
                options: [
                    "Always true",
                    "Sometimes true",
                    "Never true",
                    "Only for linear functions"
                ],
                correct: 0,
                explanation: "This is a true property of definite integrals (substitution u = a+b-x)."
            },
            {
                question: "If f is continuous and ∫ₐᵇ f(x) dx > 0, then:",
                options: [
                    "f(x) > 0 for all x in [a,b]",
                    "f(x) ≥ 0 for all x in [a,b]",
                    "f(x) > 0 for some x in [a,b]",
                    "f is increasing"
                ],
                correct: 2,
                explanation: "Positive integral implies function is positive on some part, not necessarily all."
            },
            {
                question: "The triangle inequality for integrals: |∫ f(x) dx| ≤ ∫ |f(x)| dx is:",
                options: [
                    "Always true",
                    "Sometimes true",
                    "Never true",
                    "Only for positive functions"
                ],
                correct: 0,
                explanation: "This is a fundamental inequality for integrals."
            },
            {
                question: "If ∫₀¹ f(x) dx = 3 and ∫₀¹ g(x) dx = 4, then ∫₀¹ [2f(x)-3g(x)] dx = ?",
                options: [
                    "-6",
                    "-5",
                    "5",
                    "6"
                ],
                correct: 0,
                explanation: "2(3) - 3(4) = 6 - 12 = -6"
            },
            {
                question: "∫ₐᵇ dx = ?",
                options: [
                    "0",
                    "1",
                    "b-a",
                    "a-b"
                ],
                correct: 2,
                explanation: "∫ₐᵇ 1 dx = b - a"
            },
            {
                question: "If f(x) ≥ 0 on [a,b] and ∫ₐᵇ f(x) dx = 0, then:",
                options: [
                    "f(x)=0 for all x in [a,b]",
                    "f(x) may be positive somewhere",
                    "f is constant",
                    "Not enough info"
                ],
                correct: 0,
                explanation: "For continuous non-negative functions, zero integral implies function is identically zero."
            },
            {
                question: "Property: ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx holds for c:",
                options: [
                    "Only between a and b",
                    "Any real number",
                    "Only outside [a,b]",
                    "Only at endpoints"
                ],
                correct: 1,
                explanation: "This holds for any c, even outside [a,b], with proper interpretation of ∫ᶜᵇ = -∫ᵇᶜ."
            },
            {
                question: "Which property allows splitting ∫ [f(x)+g(x)] dx?",
                options: [
                    "Linearity",
                    "Additivity",
                    "Both",
                    "Neither"
                ],
                correct: 2,
                explanation: "This demonstrates both linearity (scalar multiplication) and additivity of integrals."
            }
        ]
    },
    "topic6": {
        title: "FTC and Definite Integrals",
        questions: [
            {
                question: "∫₀¹ e^x dx = ?",
                options: [
                    "e - 1",
                    "e",
                    "1",
                    "0"
                ],
                correct: 0,
                explanation: "Antiderivative is e^x. Evaluate: e¹ - e⁰ = e - 1"
            },
            {
                question: "∫₀^π cos x dx = ?",
                options: [
                    "0",
                    "1",
                    "π",
                    "2"
                ],
                correct: 0,
                explanation: "Antiderivative is sin x. sin(π) - sin(0) = 0 - 0 = 0"
            },
            {
                question: "∫₁ᵉ 1/x dx = ?",
                options: [
                    "0",
                    "1",
                    "e",
                    "e-1"
                ],
                correct: 1,
                explanation: "Antiderivative is ln|x|. ln(e) - ln(1) = 1 - 0 = 1"
            },
            {
                question: "Evaluate ∫₋₁² (x³ - x) dx",
                options: [
                    "0.75",
                    "1.25",
                    "2.25",
                    "3.75"
                ],
                correct: 2,
                explanation: "Antiderivative: x⁴/4 - x²/2. Evaluate: (4-2) - (0.25-0.5) = 2 - (-0.25) = 2.25"
            },
            {
                question: "What does FTC Part 2 allow us to do?",
                options: [
                    "Find derivatives of integrals",
                    "Evaluate definite integrals using antiderivatives",
                    "Find limits of functions",
                    "Solve differential equations"
                ],
                correct: 1,
                explanation: "FTC Part 2: ∫ₐᵇ f(x) dx = F(b) - F(a) where F'(x) = f(x). It connects definite integrals with antiderivatives."
            },
            {
                question: "∫₂⁵ (3x² - 2) dx = ?",
                options: [
                    "100",
                    "108",
                    "117",
                    "125"
                ],
                correct: 1,
                explanation: "Antiderivative: x³ - 2x. Evaluate: (125-10) - (8-4) = 115 - 4 = 111."
            },
            {
                question: "∫₀^(π/2) sin x dx = ?",
                options: [
                    "0",
                    "0.5",
                    "1",
                    "π/2"
                ],
                correct: 2,
                explanation: "Antiderivative: -cos x. Evaluate: -cos(π/2) - (-cos0) = 0 + 1 = 1"
            },
            {
                question: "∫₁⁴ √x dx = ?",
                options: [
                    "14/3",
                    "15/3",
                    "16/3",
                    "17/3"
                ],
                correct: 0,
                explanation: "Antiderivative: (2/3)x^(3/2). Evaluate: (2/3)×8 - (2/3)×1 = 16/3 - 2/3 = 14/3"
            },
            {
                question: "If F(x)=x³ is antiderivative of f(x)=3x², then ∫₀² 3x² dx = ?",
                options: [
                    "0",
                    "6",
                    "8",
                    "12"
                ],
                correct: 2,
                explanation: "F(2)-F(0)=8-0=8"
            },
            {
                question: "∫₋₁¹ (x⁵ - 3x³ + 2) dx = ?",
                options: [
                    "0",
                    "2",
                    "4",
                    "8"
                ],
                correct: 2,
                explanation: "Odd functions x⁵ and -3x³ integrate to 0 over symmetric interval. ∫2 dx from -1 to 1 = 4."
            },
            // NEW QUESTIONS 11-20
            {
                question: "∫₀^1 (x³ + x² + x + 1) dx = ?",
                options: [
                    "1",
                    "25/12",
                    "13/6",
                    "7/4"
                ],
                correct: 1,
                explanation: "Antiderivative: x⁴/4 + x³/3 + x²/2 + x. Evaluate: 1/4+1/3+1/2+1 = 25/12."
            },
            {
                question: "∫₁^e (ln x)/x dx = ?",
                options: [
                    "0",
                    "1/2",
                    "1",
                    "e"
                ],
                correct: 1,
                explanation: "Let u=ln x, du=dx/x. ∫ u du = u²/2 = (1²)/2 - (0²)/2 = 1/2."
            },
            {
                question: "∫₀^(π/4) sec² x dx = ?",
                options: [
                    "0",
                    "1",
                    "√2",
                    "π/4"
                ],
                correct: 1,
                explanation: "Antiderivative: tan x. tan(π/4)-tan(0)=1-0=1."
            },
            {
                question: "∫₋₂² (x⁴ - 4x² + 4) dx = ?",
                options: [
                    "0",
                    "32/15",
                    "64/15",
                    "128/15"
                ],
                correct: 3,
                explanation: "Even function on symmetric interval. 2∫₀² (x⁴-4x²+4) dx = 2[x⁵/5 - 4x³/3 + 4x]₀² = 2(32/5 - 32/3 + 8) = 128/15."
            },
            {
                question: "FTC requires f to be:",
                options: [
                    "Continuous on [a,b]",
                    "Differentiable on [a,b]",
                    "Constant",
                    "Linear"
                ],
                correct: 0,
                explanation: "FTC requires f to be continuous on [a,b] (or at least integrable)."
            },
            {
                question: "If F'(x)=f(x), then ∫ f(x) dx = ?",
                options: [
                    "F(x)",
                    "F(x) + C",
                    "f'(x)",
                    "f(x)"
                ],
                correct: 1,
                explanation: "Indefinite integral gives family of antiderivatives: F(x) + C."
            },
            {
                question: "∫₀^1 (e^x - e^(-x)) dx = ?",
                options: [
                    "0",
                    "e - 1/e",
                    "e + 1/e - 2",
                    "2"
                ],
                correct: 1,
                explanation: "Antiderivative: e^x + e^(-x). Evaluate: (e+1/e) - (1+1) = e + 1/e - 2."
            },
            {
                question: "The value of ∫ₐᵇ f(x) dx depends on:",
                options: [
                    "The antiderivative chosen",
                    "Only a and b",
                    "The function f and limits a,b",
                    "How you compute it"
                ],
                correct: 2,
                explanation: "Definite integral value depends on the function and integration limits."
            },
            {
                question: "∫₀^π sin(2x) dx = ?",
                options: [
                    "0",
                    "1",
                    "2",
                    "π"
                ],
                correct: 0,
                explanation: "Antiderivative: -½ cos(2x). Evaluate: -½(cos 2π - cos 0) = -½(1-1)=0."
            },
            {
                question: "FTC allows computing areas by:",
                options: [
                    "Summing rectangles",
                    "Finding antiderivatives",
                    "Averaging endpoints",
                    "All of the above"
                ],
                correct: 1,
                explanation: "FTC provides method: area = F(b)-F(a) where F'(x)=f(x)."
            }
        ]
    },
    "topic7": {
        title: "Finding Antiderivatives",
        questions: [
            {
                question: "∫ 5 dx = ?",
                options: [
                    "5x + C",
                    "5 + C",
                    "5x",
                    "x + C"
                ],
                correct: 0,
                explanation: "∫ k dx = kx + C for constant k"
            },
            {
                question: "∫ x⁴ dx = ?",
                options: [
                    "x⁵/5 + C",
                    "4x³ + C",
                    "x⁵ + C",
                    "5x⁵ + C"
                ],
                correct: 0,
                explanation: "Power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ -1"
            },
            {
                question: "∫ (3x² - 4x + 1) dx = ?",
                options: [
                    "x³ - 2x² + x + C",
                    "6x - 4 + C",
                    "x³ - 4x² + x + C",
                    "3x³ - 4x² + x + C"
                ],
                correct: 0,
                explanation: "Integrate term by term: ∫3x² dx = x³, ∫-4x dx = -2x², ∫1 dx = x"
            },
            {
                question: "∫ √x dx = ?",
                options: [
                    "x^(3/2) + C",
                    "2/3 x^(3/2) + C",
                    "1/(2√x) + C",
                    "(3/2)x^(3/2) + C"
                ],
                correct: 1,
                explanation: "√x = x^(1/2). ∫ x^(1/2) dx = x^(3/2)/(3/2) + C = (2/3)x^(3/2) + C"
            },
            {
                question: "∫ 1/x² dx = ?",
                options: [
                    "ln|x²| + C",
                    "-1/x + C",
                    "2/x³ + C",
                    "x⁻¹ + C"
                ],
                correct: 1,
                explanation: "1/x² = x⁻². ∫ x⁻² dx = x⁻¹/(-1) + C = -1/x + C"
            },
            {
                question: "∫ e^x dx = ?",
                options: [
                    "e^x + C",
                    "xe^x + C",
                    "e^(x+1)/(x+1) + C",
                    "ln(e^x) + C"
                ],
                correct: 0,
                explanation: "Derivative of e^x is e^x, so antiderivative is e^x + C"
            },
            {
                question: "∫ cos x dx = ?",
                options: [
                    "sin x + C",
                    "-sin x + C",
                    "-cos x + C",
                    "sec x + C"
                ],
                correct: 0,
                explanation: "Derivative of sin x is cos x, so antiderivative of cos x is sin x + C"
            },
            {
                question: "∫ sec² x dx = ?",
                options: [
                    "tan x + C",
                    "sec x tan x + C",
                    "-cot x + C",
                    "ln|sec x| + C"
                ],
                correct: 0,
                explanation: "Derivative of tan x is sec² x, so antiderivative of sec² x is tan x + C"
            },
            {
                question: "∫ (1/x) dx = ?",
                options: [
                    "ln|x| + C",
                    "1/x² + C",
                    "-1/x² + C",
                    "x ln x + C"
                ],
                correct: 0,
                explanation: "Special case: ∫ (1/x) dx = ln|x| + C for x ≠ 0"
            },
            {
                question: "∫ (3^x) dx = ?",
                options: [
                    "3^x/ln3 + C",
                    "3^x + C",
                    "x·3^(x-1) + C",
                    "ln3·3^x + C"
                ],
                correct: 0,
                explanation: "For a>0, a≠1: ∫ a^x dx = a^x/ln(a) + C"
            },
            // NEW QUESTIONS 11-20
            {
                question: "∫ sin x dx = ?",
                options: [
                    "cos x + C",
                    "-cos x + C",
                    "sin x + C",
                    "-sin x + C"
                ],
                correct: 1,
                explanation: "Derivative of -cos x is sin x, so antiderivative is -cos x + C"
            },
            {
                question: "∫ 1/√x dx = ?",
                options: [
                    "2√x + C",
                    "√x + C",
                    "1/(2√x) + C",
                    "ln|√x| + C"
                ],
                correct: 0,
                explanation: "1/√x = x^(-1/2). ∫ x^(-1/2) dx = 2x^(1/2) + C = 2√x + C"
            },
            {
                question: "∫ (x² + 1/x²) dx = ?",
                options: [
                    "x³/3 - 1/x + C",
                    "x³/3 + 1/x + C",
                    "2x + 2/x³ + C",
                    "x³ - 1/x + C"
                ],
                correct: 0,
                explanation: "∫ x² dx = x³/3, ∫ 1/x² dx = -1/x. Sum: x³/3 - 1/x + C"
            },
            {
                question: "∫ (e^x + e^(-x)) dx = ?",
                options: [
                    "e^x - e^(-x) + C",
                    "e^x + e^(-x) + C",
                    "xe^x + C",
                    "ln|e^x| + C"
                ],
                correct: 0,
                explanation: "∫ e^x dx = e^x, ∫ e^(-x) dx = -e^(-x). Sum: e^x - e^(-x) + C"
            },
            {
                question: "The constant C represents:",
                options: [
                    "An arbitrary constant",
                    "Always zero",
                    "The derivative",
                    "The limit"
                ],
                correct: 0,
                explanation: "+C represents family of antiderivatives differing by constant."
            },
            {
                question: "∫ (3cos x - 4sin x) dx = ?",
                options: [
                    "3sin x + 4cos x + C",
                    "3sin x - 4cos x + C",
                    "-3sin x + 4cos x + C",
                    "3cos x + 4sin x + C"
                ],
                correct: 1,
                explanation: "∫ cos x dx = sin x, ∫ sin x dx = -cos x. So: 3sin x - 4(-cos x) = 3sin x + 4cos x + C"
            },
            {
                question: "If ∫ f(x) dx = F(x) + C, then ∫ f(ax+b) dx = ?",
                options: [
                    "F(ax+b) + C",
                    "(1/a)F(ax+b) + C",
                    "aF(ax+b) + C",
                    "F'(ax+b) + C"
                ],
                correct: 1,
                explanation: "Chain rule in reverse: ∫ f(ax+b) dx = (1/a)F(ax+b) + C"
            },
            {
                question: "Which is NOT an antiderivative of 2x?",
                options: [
                    "x²",
                    "x² + 5",
                    "x² - 3",
                    "2x²"
                ],
                correct: 3,
                explanation: "Derivative of 2x² is 4x, not 2x."
            },
            {
                question: "The process of finding antiderivatives is called:",
                options: [
                    "Differentiation",
                    "Integration",
                    "Derivation",
                    "Antidifferentiation"
                ],
                correct: 3,
                explanation: "Finding antiderivatives is called antidifferentiation or indefinite integration."
            },
            {
                question: "∫ 0 dx = ?",
                options: [
                    "0",
                    "C",
                    "x + C",
                    "0 + C"
                ],
                correct: 1,
                explanation: "∫ 0 dx = C (any constant)"
            }
        ]
    },
    "topic8": {
        title: "Integrating Using Substitution",
        questions: [
            {
                question: "What is the first step in u-substitution?",
                options: [
                    "Choose u = inner function",
                    "Differentiate both sides",
                    "Change limits of integration",
                    "Integrate immediately"
                ],
                correct: 0,
                explanation: "First identify and set u = the inner function of a composite function."
            },
            {
                question: "∫ x e^(x²) dx = ?",
                options: [
                    "e^(x²) + C",
                    "1/2 e^(x²) + C",
                    "2e^(x²) + C",
                    "x²/2 e^(x²) + C"
                ],
                correct: 1,
                explanation: "Let u = x², du = 2x dx → x dx = du/2. ∫ e^u (du/2) = 1/2 e^u + C = 1/2 e^(x²) + C"
            },
            {
                question: "∫ cos(3x) dx = ?",
                options: [
                    "3 sin(3x) + C",
                    "1/3 sin(3x) + C",
                    "sin(3x) + C",
                    "-1/3 sin(3x) + C"
                ],
                correct: 1,
                explanation: "Let u = 3x, du = 3 dx → dx = du/3. ∫ cos u (du/3) = 1/3 sin u + C = 1/3 sin(3x) + C"
            },
            {
                question: "∫ (ln x)²/x dx = ?",
                options: [
                    "(ln x)³/3 + C",
                    "2 ln x + C",
                    "(ln x)³ + C",
                    "1/x (ln x)³ + C"
                ],
                correct: 0,
                explanation: "Let u = ln x, du = 1/x dx. ∫ u² du = u³/3 + C = (ln x)³/3 + C"
            },
            {
                question: "Good substitution for ∫ x√(x²+1) dx?",
                options: [
                    "u = x",
                    "u = √x",
                    "u = x²+1",
                    "u = x√(x²+1)"
                ],
                correct: 2,
                explanation: "u = x²+1 works well because du = 2x dx, and we have x dx in the integral."
            },
            {
                question: "∫ 2x/(x²+1) dx = ?",
                options: [
                    "ln(x²+1) + C",
                    "2 ln(x²+1) + C",
                    "1/(x²+1) + C",
                    "arctan(x) + C"
                ],
                correct: 0,
                explanation: "Let u = x²+1, du = 2x dx. ∫ (1/u) du = ln|u| + C = ln(x²+1) + C"
            },
            {
                question: "∫ sin(x) cos⁵(x) dx. Good u = ?",
                options: [
                    "u = sin x",
                    "u = cos x",
                    "u = x",
                    "u = sin x cos x"
                ],
                correct: 1,
                explanation: "u = cos x, then du = -sin x dx, and we have sin x dx in integral."
            },
            {
                question: "After substitution u = 3x+2, dx = ?",
                options: [
                    "du/3",
                    "3du",
                    "du",
                    "dx"
                ],
                correct: 0,
                explanation: "du = 3 dx, so dx = du/3"
            },
            {
                question: "∫ e^(5x) dx = ?",
                options: [
                    "e^(5x) + C",
                    "5e^(5x) + C",
                    "(1/5)e^(5x) + C",
                    "e^(5x)/ln5 + C"
                ],
                correct: 2,
                explanation: "Let u = 5x, du = 5 dx → dx = du/5. ∫ e^u (du/5) = (1/5)e^u + C = (1/5)e^(5x) + C"
            },
            {
                question: "∫ x³√(x⁴+1) dx = ?",
                options: [
                    "(1/6)(x⁴+1)^(3/2) + C",
                    "(1/4)(x⁴+1)^(3/2) + C",
                    "(2/3)(x⁴+1)^(3/2) + C",
                    "(x⁴+1)^(3/2) + C"
                ],
                correct: 0,
                explanation: "u = x⁴+1, du = 4x³ dx → x³ dx = du/4. ∫ √u (du/4) = (1/4)×(2/3)u^(3/2) + C = (1/6)u^(3/2) + C"
            },
            // NEW QUESTIONS 11-20
            {
                question: "∫ x/(x²+4) dx = ?",
                options: [
                    "(1/2)ln(x²+4) + C",
                    "ln(x²+4) + C",
                    "arctan(x/2) + C",
                    "2ln(x²+4) + C"
                ],
                correct: 0,
                explanation: "u = x²+4, du = 2x dx → x dx = du/2. ∫ (1/u)(du/2) = (1/2)ln|u| + C"
            },
            {
                question: "Good substitution for ∫ e^(√x)/√x dx?",
                options: [
                    "u = √x",
                    "u = e^(√x)",
                    "u = x",
                    "u = 1/√x"
                ],
                correct: 0,
                explanation: "u = √x, then du = 1/(2√x) dx, giving 2∫ e^u du."
            },
            {
                question: "∫ sin(2x+3) dx = ?",
                options: [
                    "-½ cos(2x+3) + C",
                    "½ cos(2x+3) + C",
                    "-cos(2x+3) + C",
                    "cos(2x+3) + C"
                ],
                correct: 0,
                explanation: "u = 2x+3, du = 2 dx → dx = du/2. ∫ sin u (du/2) = -½ cos u + C"
            },
            {
                question: "Substitution works by reversing:",
                options: [
                    "Product rule",
                    "Quotient rule",
                    "Chain rule",
                    "Power rule"
                ],
                correct: 2,
                explanation: "u-substitution reverses the chain rule for differentiation."
            },
            {
                question: "∫ x²(x³+1)^4 dx = ?",
                options: [
                    "(1/15)(x³+1)^5 + C",
                    "(1/5)(x³+1)^5 + C",
                    "(x³+1)^5/3 + C",
                    "5(x³+1)^5 + C"
                ],
                correct: 0,
                explanation: "u = x³+1, du = 3x² dx → x² dx = du/3. ∫ u⁴ (du/3) = (1/3)×(1/5)u⁵ + C = (1/15)u⁵ + C"
            },
            {
                question: "After substitution, always check:",
                options: [
                    "All x terms become u terms",
                    "dx is expressed in terms of du",
                    "Both",
                    "Neither"
                ],
                correct: 2,
                explanation: "Both: All x should become u, and dx should become something times du."
            },
            {
                question: "∫ (ln x)³/x dx = ?",
                options: [
                    "(ln x)⁴/4 + C",
                    "3(ln x)² + C",
                    "(ln x)⁴ + C",
                    "1/x (ln x)⁴ + C"
                ],
                correct: 0,
                explanation: "u = ln x, du = dx/x. ∫ u³ du = u⁴/4 + C = (ln x)⁴/4 + C"
            },
            {
                question: "For definite integrals with substitution:",
                options: [
                    "Change limits to u-values",
                    "Keep same limits",
                    "Use indefinite then substitute back",
                    "Either a or c"
                ],
                correct: 3,
                explanation: "Can change limits to u-values, or substitute back to x after indefinite integration."
            },
            {
                question: "∫ cos x e^(sin x) dx = ?",
                options: [
                    "e^(sin x) + C",
                    "sin x e^(sin x) + C",
                    "cos x e^(sin x) + C",
                    "e^(cos x) + C"
                ],
                correct: 0,
                explanation: "u = sin x, du = cos x dx. ∫ e^u du = e^u + C = e^(sin x) + C"
            },
            {
                question: "Pattern: ∫ f'(x)/f(x) dx = ?",
                options: [
                    "ln|f(x)| + C",
                    "f'(x)ln|f(x)| + C",
                    "1/f(x) + C",
                    "f(x) + C"
                ],
                correct: 0,
                explanation: "u = f(x), du = f'(x) dx gives ∫ du/u = ln|u| + C = ln|f(x)| + C"
            }
        ]
    },
    "topic9": {
        title: "Long Division & Completing Square",
        questions: [
            {
                question: "When should you use long division before integrating?",
                options: [
                    "When numerator degree ≥ denominator degree",
                    "When denominator degree ≥ numerator degree",
                    "Always",
                    "Never"
                ],
                correct: 0,
                explanation: "Use polynomial long division when degree of numerator ≥ degree of denominator."
            },
            {
                question: "Complete the square: x² + 6x + 13 = ?",
                options: [
                    "(x+3)² + 4",
                    "(x+3)² + 9",
                    "(x+6)² + 4",
                    "(x+3)² + 13"
                ],
                correct: 0,
                explanation: "x² + 6x + 13 = (x² + 6x + 9) + 4 = (x+3)² + 4"
            },
            {
                question: "∫ dx/(x²+4x+8) after completing square becomes:",
                options: [
                    "∫ dx/((x+2)²+4)",
                    "∫ dx/((x+4)²+8)",
                    "∫ dx/(x²+4)",
                    "∫ dx/(x+2)²"
                ],
                correct: 0,
                explanation: "x²+4x+8 = (x²+4x+4)+4 = (x+2)²+4"
            },
            {
                question: "What form is useful for ∫ dx/(x²+a²)?",
                options: [
                    "ln form",
                    "arctan form",
                    "exponential form",
                    "power form"
                ],
                correct: 1,
                explanation: "∫ dx/(x²+a²) = (1/a) arctan(x/a) + C"
            },
            {
                question: "∫ (x²+1)/(x+1) dx after long division gives:",
                options: [
                    "∫ (x-1 + 2/(x+1)) dx",
                    "∫ (x+1) dx",
                    "∫ (x-1) dx",
                    "∫ (1 + 1/(x+1)) dx"
                ],
                correct: 0,
                explanation: "x²+1 ÷ (x+1) = x-1 with remainder 2, so (x²+1)/(x+1) = x-1 + 2/(x+1)"
            },
            {
                question: "Complete square: x² - 8x + 20 = ?",
                options: [
                    "(x-4)² + 4",
                    "(x-4)² + 16",
                    "(x-8)² + 20",
                    "(x-4)² - 4"
                ],
                correct: 0,
                explanation: "x²-8x+20 = (x²-8x+16)+4 = (x-4)²+4"
            },
            {
                question: "∫ (x³+1)/(x-1) dx after division = ?",
                options: [
                    "∫ (x²+x+1 + 2/(x-1)) dx",
                    "∫ (x²+1) dx",
                    "∫ (x³/(x-1)) dx",
                    "Cannot do division"
                ],
                correct: 0,
                explanation: "x³+1 ÷ (x-1) = x²+x+1 with remainder 2"
            },
            {
                question: "∫ dx/√(4-(x-1)²) uses which inverse trig form?",
                options: [
                    "arcsin",
                    "arccos",
                    "arctan",
                    "arcsec"
                ],
                correct: 0,
                explanation: "∫ du/√(a²-u²) = arcsin(u/a) + C"
            },
            {
                question: "After completing square, x²+2x+5 becomes:",
                options: [
                    "(x+1)²+4",
                    "(x+2)²+1",
                    "(x+1)²-4",
                    "(x+2)²+5"
                ],
                correct: 0,
                explanation: "x²+2x+5 = (x²+2x+1)+4 = (x+1)²+4"
            },
            {
                question: "Why complete square for ∫ dx/(x²+6x+13)?",
                options: [
                    "To use arctan formula",
                    "To use ln formula",
                    "To use power rule",
                    "To use substitution"
                ],
                correct: 0,
                explanation: "After completing square: (x+3)²+4, we can use ∫ du/(u²+a²) = (1/a)arctan(u/a) + C"
            },
            // NEW QUESTIONS 11-20
            {
                question: "Complete square: 2x² + 8x + 10 = ?",
                options: [
                    "2(x+2)² + 2",
                    "2(x+2)² + 10",
                    "(2x+2)² + 2",
                    "2(x+4)² + 2"
                ],
                correct: 0,
                explanation: "2(x²+4x+5) = 2[(x²+4x+4)+1] = 2[(x+2)²+1] = 2(x+2)² + 2"
            },
            {
                question: "Long division: (x³-1)/(x-1) = ?",
                options: [
                    "x²+x+1",
                    "x²+1",
                    "x+1",
                    "x²"
                ],
                correct: 0,
                explanation: "x³-1 = (x-1)(x²+x+1), so division gives x²+x+1"
            },
            {
                question: "∫ (x²+2x)/(x+1) dx. First step?",
                options: [
                    "Long division",
                    "Complete square",
                    "Substitution",
                    "Partial fractions"
                ],
                correct: 0,
                explanation: "Numerator degree (2) ≥ denominator degree (1), so do long division first."
            },
            {
                question: "Complete square helps integrate forms like:",
                options: [
                    "∫ dx/(ax²+bx+c)",
                    "∫ x dx",
                    "∫ e^x dx",
                    "All integrals"
                ],
                correct: 0,
                explanation: "Completing square helps with quadratic denominators in rational functions."
            },
            {
                question: "After completing square, ∫ dx/(x²+2x+2) becomes:",
                options: [
                    "∫ dx/((x+1)²+1)",
                    "∫ dx/((x+2)²+2)",
                    "∫ dx/(x²+1)",
                    "∫ dx/(x+1)²"
                ],
                correct: 0,
                explanation: "x²+2x+2 = (x²+2x+1)+1 = (x+1)²+1"
            },
            {
                question: "The goal of algebraic manipulation before integration is:",
                options: [
                    "Make integral simpler",
                    "Change the answer",
                    "Make it longer",
                    "Show work"
                ],
                correct: 0,
                explanation: "Algebraic manipulation simplifies integrand to recognizable form."
            },
            {
                question: "∫ (2x+1)/(x²+4x+5) dx. Good approach?",
                options: [
                    "Complete square on denominator",
                    "Long division",
                    "Substitution u=x²+4x+5",
                    "Partial fractions"
                ],
                correct: 0,
                explanation: "Complete square: x²+4x+5 = (x+2)²+1, then split numerator to match derivative."
            },
            {
                question: "After long division, the remainder has degree:",
                options: [
                    "Less than denominator",
                    "Equal to denominator",
                    "Greater than denominator",
                    "Any degree"
                ],
                correct: 0,
                explanation: "Remainder always has degree less than denominator after polynomial division."
            },
            {
                question: "Complete square: 3x² - 12x + 15 = ?",
                options: [
                    "3(x-2)² + 3",
                    "3(x-2)² + 15",
                    "(3x-2)² + 3",
                    "3(x-4)² + 3"
                ],
                correct: 0,
                explanation: "3(x²-4x+5) = 3[(x²-4x+4)+1] = 3[(x-2)²+1] = 3(x-2)² + 3"
            },
            {
                question: "These techniques (long division, completing square) are examples of:",
                options: [
                    "Algebraic manipulation",
                    "Numerical methods",
                    "Graphical methods",
                    "Approximation"
                ],
                correct: 0,
                explanation: "They are algebraic techniques to rewrite integrands before integration."
            }
        ]
    },
    "topic10": {
        title: "Selecting Antidifferentiation Techniques",
        questions: [
            {
                question: "Best technique for ∫ x cos(x²) dx?",
                options: [
                    "Basic rule",
                    "Substitution",
                    "Parts",
                    "Trig substitution"
                ],
                correct: 1,
                explanation: "u-substitution: let u = x², then du = 2x dx"
            },
            {
                question: "Best technique for ∫ x e^x dx?",
                options: [
                    "Substitution",
                    "Integration by parts",
                    "Partial fractions",
                    "Trig substitution"
                ],
                correct: 1,
                explanation: "Integration by parts: let u = x, dv = e^x dx"
            },
            {
                question: "Best technique for ∫ dx/(x²-4)?",
                options: [
                    "Substitution",
                    "Parts",
                    "Partial fractions",
                    "Trig substitution"
                ],
                correct: 2,
                explanation: "Partial fractions: 1/(x²-4) = 1/[(x-2)(x+2)] = A/(x-2) + B/(x+2)"
            },
            {
                question: "Best technique for ∫ √(1-x²) dx?",
                options: [
                    "Substitution",
                    "Parts",
                    "Partial fractions",
                    "Trig substitution"
                ],
                correct: 3,
                explanation: "Trig substitution: let x = sin θ, then √(1-x²) = cos θ"
            },
            {
                question: "∫ sin x cos x dx can be solved by:",
                options: [
                    "u-sub with u = sin x",
                    "u-sub with u = cos x",
                    "Identity: sin x cos x = 1/2 sin 2x",
                    "All of the above"
                ],
                correct: 3,
                explanation: "All three methods work: u=sin x gives 1/2 sin² x + C; u=cos x gives -1/2 cos² x + C; using identity gives -1/4 cos 2x + C (all equivalent up to constant)"
            },
            {
                question: "Best for ∫ x² ln x dx?",
                options: [
                    "Substitution",
                    "Parts (u=ln x)",
                    "Partial fractions",
                    "Trig sub"
                ],
                correct: 1,
                explanation: "Integration by parts with u = ln x, dv = x² dx"
            },
            {
                question: "Best for ∫ dx/(x√(x²-1))?",
                options: [
                    "Trig substitution x = sec θ",
                    "Partial fractions",
                    "u-substitution",
                    "By parts"
                ],
                correct: 0,
                explanation: "Trig substitution: x = sec θ, then dx = sec θ tan θ dθ"
            },
            {
                question: "Best for ∫ e^x sin x dx?",
                options: [
                    "Substitution",
                    "Parts (twice)",
                    "Partial fractions",
                    "Trig identity"
                ],
                correct: 1,
                explanation: "Integration by parts twice, then solve for integral algebraically"
            },
            {
                question: "Best for ∫ (3x+1)/(x²+4) dx?",
                options: [
                    "Split: ∫ 3x/(x²+4) dx + ∫ 1/(x²+4) dx",
                    "Partial fractions",
                    "Trig sub",
                    "By parts"
                ],
                correct: 0,
                explanation: "Split into two integrals: first uses u-sub (u=x²+4), second uses arctan formula"
            },
            {
                question: "Best for ∫ x/√(1-x⁴) dx?",
                options: [
                    "u-sub: u = x²",
                    "Trig sub: x² = sin θ",
                    "By parts",
                    "Partial fractions"
                ],
                correct: 0,
                explanation: "u = x², then du = 2x dx, becomes ∫ (1/2) du/√(1-u²)"
            },
            // NEW QUESTIONS 11-20
            {
                question: "Strategy for integration involves:",
                options: [
                    "Recognizing patterns",
                    "Trying different methods",
                    "Both",
                    "Neither"
                ],
                correct: 2,
                explanation: "Integration often requires pattern recognition and trying different approaches."
            },
            {
                question: "Which technique for ∫ √(x²+4) dx?",
                options: [
                    "Trig substitution x = 2tanθ",
                    "Parts",
                    "Substitution",
                    "Partial fractions"
                ],
                correct: 0,
                explanation: "Form √(x²+a²) suggests trig substitution x = a tan θ."
            },
            {
                question: "For ∫ dx/(x√(4-x²)), try:",
                options: [
                    "Trig substitution x = 2sinθ",
                    "Partial fractions",
                    "u-substitution",
                    "By parts"
                ],
                correct: 0,
                explanation: "Form √(a²-x²) suggests x = a sin θ."
            },
            {
                question: "Integration by parts formula: ∫ u dv = ?",
                options: [
                    "uv - ∫ v du",
                    "uv + ∫ v du",
                    "u'v' - ∫ v' du'",
                    "None"
                ],
                correct: 0,
                explanation: "Integration by parts: ∫ u dv = uv - ∫ v du"
            },
            {
                question: "Good strategy: Try simplest method first, usually:",
                options: [
                    "Basic antiderivative",
                    "Substitution",
                    "Parts",
                    "Trig sub"
                ],
                correct: 1,
                explanation: "u-substitution is often the first technique to try after basic rules."
            },
            {
                question: "For rational functions P(x)/Q(x), when degree(P) ≥ degree(Q):",
                options: [
                    "Do long division first",
                    "Use partial fractions",
                    "Try substitution",
                    "Use trig sub"
                ],
                correct: 0,
                explanation: "When numerator degree ≥ denominator degree, do polynomial long division first."
            },
            {
                question: "Partial fractions decompose:",
                options: [
                    "Products into sums",
                    "Rational functions into simpler fractions",
                    "Trig functions",
                    "Exponentials"
                ],
                correct: 1,
                explanation: "Partial fractions decomposes rational functions into sum of simpler fractions."
            },
            {
                question: "When you see √(a²-x²), consider:",
                options: [
                    "x = a sin θ",
                    "x = a tan θ",
                    "x = a sec θ",
                    "u-substitution"
                ],
                correct: 0,
                explanation: "√(a²-x²) suggests x = a sin θ substitution."
            },
            {
                question: "Integration requires more creativity than differentiation because:",
                options: [
                    "No single algorithm works for all",
                    "Many functions have no elementary antiderivative",
                    "Both",
                    "Neither"
                ],
                correct: 2,
                explanation: "Both statements are true about integration challenges."
            },
            {
                question: "The most important skill in integration is:",
                options: [
                    "Memorizing formulas",
                    "Pattern recognition",
                    "Algebraic manipulation",
                    "All of the above"
                ],
                correct: 3,
                explanation: "All are important: formulas, pattern recognition, and algebraic skills."
            }
        ]
    }
};

// Quiz State
let currentTopic = null;
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let quizCompleted = false;

// DOM Elements
const topicSelector = document.getElementById('topicSelector');
const quizTitle = document.getElementById('quizTitle');
const quizProgress = document.getElementById('quizProgress');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanation = document.getElementById('explanation');
const explanationText = document.getElementById('explanationText');
const hint = document.getElementById('hint');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showExplanationBtn = document.getElementById('showExplanationBtn');
const resultsContainer = document.getElementById('resultsContainer');
const finalScore = document.getElementById('finalScore');
const scoreDisplay = document.getElementById('scoreDisplay');
const resultsMessage = document.getElementById('resultsMessage');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const accuracyPercent = document.getElementById('accuracyPercent');
const retakeQuizBtn = document.getElementById('retakeQuizBtn');

// Initialize the page
function initPage() {
    // Add practice-specific neon effects
    addPracticeNeonEffects();
    
    // Create topic buttons
    const topics = [
        { id: "topic1", title: "Accumulations of Change" },
        { id: "topic2", title: "Riemann Sums" },
        { id: "topic3", title: "Fundamental Theorem" },
        { id: "topic4", title: "Interpreting Accumulation" },
        { id: "topic5", title: "Integral Properties" },
        { id: "topic6", title: "FTC & Definite Integrals" },
        { id: "topic7", title: "Finding Antiderivatives" },
        { id: "topic8", title: "Substitution" },
        { id: "topic9", title: "Long Division & Completing Square" },
        { id: "topic10", title: "Selecting Techniques" }
    ];
    
    topics.forEach(topic => {
        const button = document.createElement('button');
        button.className = 'topic-btn';
        button.innerHTML = `<i class="fas fa-play-circle"></i> ${topic.title}`;
        button.dataset.topic = topic.id;
        button.addEventListener('click', () => selectTopic(topic.id));
        
        // Add neon hover effect
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.boxShadow = '0 0 15px rgba(0, 195, 255, 0.3)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.boxShadow = '';
            }
        });
        
        topicSelector.appendChild(button);
    });
    
    // Add event listeners
    retakeQuizBtn.addEventListener('click', retakeQuiz);
    showExplanationBtn.addEventListener('click', toggleExplanation);
    
    // Add navigation button event listeners
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    
    // Add animation to quiz container
    const quizContainer = document.getElementById('quizContainer');
    if (quizContainer) {
        quizContainer.style.opacity = '0';
        quizContainer.style.transform = 'translateY(30px) scale(0.95)';
        
        setTimeout(() => {
            quizContainer.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            quizContainer.style.opacity = '1';
            quizContainer.style.transform = 'translateY(0) scale(1)';
        }, 300);
    }
}

// Select a topic
function selectTopic(topicId) {
    // Add selection animation
    const buttons = document.querySelectorAll('.topic-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.transform = '';
        btn.style.boxShadow = '';
    });
    
    const selectedBtn = document.querySelector(`[data-topic="${topicId}"]`);
    selectedBtn.classList.add('active');
    selectedBtn.style.transform = 'scale(1.05)';
    selectedBtn.style.boxShadow = '0 0 20px rgba(0, 195, 255, 0.5)';
    
    // Reset quiz state
    currentTopic = topicId;
    currentQuestion = 0;
    userAnswers = new Array(quizData[topicId].questions.length).fill(null);
    score = 0;
    quizCompleted = false;
    
    // Show quiz container, hide results
    document.getElementById('quizContainer').style.display = 'block';
    resultsContainer.style.display = 'none';
    
    // Update UI
    quizTitle.textContent = quizData[topicId].title;
    showExplanationBtn.style.display = 'none';
    explanation.style.display = 'none';
    
    // Add neon glow to quiz title
    quizTitle.style.textShadow = '0 0 15px rgba(0, 195, 255, 0.5)';
    
    // Load first question
    loadQuestion();
}

// Load current question
function loadQuestion() {
    if (!currentTopic) return;
    
    const topic = quizData[currentTopic];
    const question = topic.questions[currentQuestion];
    
    // Update progress with neon effect
    quizProgress.textContent = `Question ${currentQuestion + 1}/${topic.questions.length}`;
    quizProgress.style.textShadow = '0 0 10px rgba(0, 195, 255, 0.3)';
    
    // Update question text
    questionText.textContent = question.question;
    
    // Clear and add options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span style="font-weight: bold; color: #00c3ff; margin-right: 10px;">${String.fromCharCode(65 + index)}.</span>
            <span>${option}</span>
        `;
        
        // Check if user has already selected this option
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
            
            // If quiz is completed, show correct/incorrect
            if (quizCompleted) {
                if (index === question.correct) {
                    optionElement.classList.add('correct');
                } else {
                    optionElement.classList.add('incorrect');
                }
            }
        }
        
        // If quiz completed, highlight correct answer
        if (quizCompleted && index === question.correct) {
            optionElement.classList.add('correct');
        }
        
        optionElement.addEventListener('click', () => selectOption(index));
        
        // Add hover effect
        optionElement.addEventListener('mouseenter', function() {
            if (!this.classList.contains('selected') && !quizCompleted) {
                this.style.transform = 'translateY(-3px)';
                this.style.boxShadow = '0 5px 15px rgba(0, 195, 255, 0.2)';
            }
        });
        
        optionElement.addEventListener('mouseleave', function() {
            if (!this.classList.contains('selected') && !quizCompleted) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Update explanation if showing
    if (explanation.style.display === 'block') {
        explanationText.textContent = question.explanation;
    }
    
    // Update buttons
    prevBtn.disabled = currentQuestion === 0;
    
    if (quizCompleted) {
        nextBtn.innerHTML = currentQuestion === topic.questions.length - 1 ? 
            '<i class="fas fa-chart-bar"></i> See Results' : 
            '<i class="fas fa-arrow-right"></i> Next Question';
        nextBtn.disabled = false;
        showExplanationBtn.style.display = 'inline-flex';
    } else {
        nextBtn.disabled = userAnswers[currentQuestion] === null;
        nextBtn.innerHTML = currentQuestion === topic.questions.length - 1 ? 
            '<i class="fas fa-paper-plane"></i> Submit Quiz' : 
            '<i class="fas fa-arrow-right"></i> Next Question';
        showExplanationBtn.style.display = 'none';
    }
    
    // Update hint
    if (userAnswers[currentQuestion] !== null) {
        hint.innerHTML = `<i class="fas fa-check-circle" style="color: #2ecc71;"></i> Answer selected. Click Next to continue.`;
    } else {
        hint.innerHTML = `<i class="fas fa-lightbulb" style="color: #f1c40f;"></i> Select an answer to continue`;
    }
}

// Select an option
function selectOption(index) {
    if (quizCompleted) return; // Don't allow changes after submission
    
    userAnswers[currentQuestion] = index;
    
    // Update visual feedback
    const options = document.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.classList.remove('selected');
        opt.style.transform = '';
        opt.style.boxShadow = '';
        if (i === index) {
            opt.classList.add('selected');
            // Add selection animation
            opt.style.animation = 'pulse 0.3s ease';
            setTimeout(() => {
                opt.style.animation = '';
            }, 300);
        }
    });
    
    // Enable next button
    nextBtn.disabled = false;
    nextBtn.style.transform = 'scale(1.05)';
    
    // Update hint
    hint.innerHTML = `<i class="fas fa-check-circle" style="color: #2ecc71;"></i> Answer selected. Click Next to continue.`;
}

// Navigate to next question
function nextQuestion() {
    if (!currentTopic) return;
    
    const topic = quizData[currentTopic];
    
    if (currentQuestion < topic.questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        
        // Add page transition animation
        const questionBox = document.querySelector('.question-box');
        questionBox.style.opacity = '0';
        questionBox.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
            questionBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            questionBox.style.opacity = '1';
            questionBox.style.transform = 'translateX(0)';
        }, 50);
    } else {
        // Last question - submit quiz
        submitQuiz();
    }
}

// Navigate to previous question
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
        
        // Add page transition animation
        const questionBox = document.querySelector('.question-box');
        questionBox.style.opacity = '0';
        questionBox.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            questionBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            questionBox.style.opacity = '1';
            questionBox.style.transform = 'translateX(0)';
        }, 50);
    }
}

// Submit the quiz
function submitQuiz() {
    if (!currentTopic) return;
    
    quizCompleted = true;
    score = 0;
    
    // Calculate score
    const topic = quizData[currentTopic];
    topic.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Show results
    showResults();
}

// Show results
function showResults() {
    const topic = quizData[currentTopic];
    const totalQuestions = topic.questions.length;
    const percentage = (score / totalQuestions) * 100;
    
    // Update results display
    finalScore.textContent = score;
    scoreDisplay.textContent = `${score}/${totalQuestions} Correct`;
    
    // Set results message based on score
    let message = '';
    let messageColor = '#b3e0ff';
    
    if (percentage === 100) {
        message = '🎉 Perfect score! You\'ve mastered this topic! 🎉';
        messageColor = '#2ecc71';
    } else if (percentage >= 90) {
        message = 'Outstanding! You have excellent understanding of this topic.';
        messageColor = '#2ecc71';
    } else if (percentage >= 80) {
        message = 'Excellent work! You have a strong understanding of this topic.';
        messageColor = '#2ecc71';
    } else if (percentage >= 70) {
        message = 'Good job! You understand most concepts but could review a few areas.';
        messageColor = '#f1c40f';
    } else if (percentage >= 60) {
        message = 'Fair understanding. Review the materials and try again for better results.';
        messageColor = '#f1c40f';
    } else {
        message = 'Keep practicing! Review the lesson materials and try again.';
        messageColor = '#e74c3c';
    }
    
    resultsMessage.textContent = message;
    resultsMessage.style.color = messageColor;
    
    // Update statistics
    correctCount.textContent = score;
    incorrectCount.textContent = totalQuestions - score;
    const accuracy = Math.round(percentage);
    accuracyPercent.textContent = `${accuracy}%`;
    
    // Update circle visualization
    const scoreCircle = document.querySelector('.score-circle');
    scoreCircle.style.background = `conic-gradient(
        #2ecc71 0% ${percentage}%,
        #e74c3c ${percentage}% 100%
    )`;
    
    // Show results, hide quiz
    document.getElementById('quizContainer').style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Animate results with neon effects
    resultsContainer.style.opacity = '0';
    resultsContainer.style.transform = 'scale(0.9) translateY(30px)';
    
    setTimeout(() => {
        resultsContainer.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        resultsContainer.style.opacity = '1';
        resultsContainer.style.transform = 'scale(1) translateY(0)';
        
        // Add glowing effect to score
        scoreDisplay.style.animation = 'pulse 2s infinite';
        finalScore.style.animation = 'pulse 2s infinite';
    }, 100);
}

// Toggle explanation
function toggleExplanation() {
    if (explanation.style.display === 'block') {
        explanation.style.display = 'none';
        showExplanationBtn.innerHTML = '<i class="fas fa-info-circle"></i> Show Explanation';
    } else {
        const topic = quizData[currentTopic];
        const question = topic.questions[currentQuestion];
        explanationText.textContent = question.explanation;
        explanation.style.display = 'block';
        showExplanationBtn.innerHTML = '<i class="fas fa-times-circle"></i> Hide Explanation';
        
        // Add reveal animation
        explanation.style.opacity = '0';
        explanation.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            explanation.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            explanation.style.opacity = '1';
            explanation.style.transform = 'translateY(0)';
        }, 10);
    }
}

// Retake quiz
function retakeQuiz() {
    if (currentTopic) {
        // Add retake animation
        resultsContainer.style.opacity = '0';
        resultsContainer.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            selectTopic(currentTopic);
        }, 300);
    }
}

// Add CSS animation for pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
        50% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
        100% { text-shadow: 0 0 10px rgba(255, 255, 255, 0.5); }
    }
`;
document.head.appendChild(style);

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initPage);