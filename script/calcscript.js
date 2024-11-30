let currentGender = null;

        function selectGender(gender) {
            const maleOption = document.querySelector('.male');
            const femaleOption = document.querySelector('.female');

            maleOption.classList.remove('active');
            femaleOption.classList.remove('active');

            if (gender === 'female') {
                femaleOption.classList.add('active');
            } else {
                maleOption.classList.add('active');
            }
            currentGender = gender;
        }

        function calculateBMI() {
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value) / 100;
            const bmiValue = document.getElementById('bmi-value');
            const bmiStatus = document.getElementById('bmi-status');
            const bmiDetails = document.getElementById('bmi-details');
            const infoLink = document.getElementById('info-link');
            const motivationQuote = document.getElementById('motivation-quote');
            const bmiMeterPointer = document.getElementById('bmi-meter-pointer');

            if (weight > 0 && height > 0) {
                const bmi = (weight / (height * height)).toFixed(2);
                
                bmiValue.textContent = bmi;

                let color, status, quote, details, linkText, linkHref, pointerPosition;

                if (bmi < 18.5) {
                    status = "Underweight";
                    color = '#ffa500';
                    quote = "Small changes can lead to big transformations.";
                    details = "Underweight. Consult a healthcare professional.";
                    linkText = "Underweight Tips";
                    linkHref = "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429";
                    pointerPosition = (bmi / 18.5) * 18.5;
                } else if (bmi >= 18.5 && bmi <= 24.9) {
                    status = "Normal Weight";
                    color = '#4ecdc4';
                    quote = "Maintaining a balanced lifestyle is key!";
                    details = "Healthy BMI range. Keep it up!";
                    linkText = "Maintaining Weight";
                    linkHref = "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/maintaining-healthy-weight#:~:text=Being%20active%20and%20choosing%20healthy,of%20physical%20activity%20per%20week.";
                    pointerPosition = 18.5 + ((bmi - 18.5) / (24.9 - 18.5)) * 6.5;
                } else if (bmi >= 25 && bmi <= 29.9) {
                    status = "Overweight";
                    color = '#ff6b6b';
                    quote = "Every small step counts. You're stronger than you think!";
                    details = "Overweight. Consider professional guidance.";
                    linkText = "Overweight Advice";
                    linkHref = "https://www.mayoclinic.org/diseases-conditions/obesity/diagnosis-treatment/drc-20375749";
                    pointerPosition = 25 + ((bmi - 25) / (29.9 - 25)) * 5;
                } else {
                    status = "Obese";
                    color = '#ff4757';
                    quote = "Your journey begins with a single step!";
                    details = "Obesity. Comprehensive health plan recommended.";
                    linkText = "Obesity Resources";
                    linkHref = "https://www.cdc.gov/obesity/php/about/obesity-strategies-what-can-be-done.html";
                    pointerPosition = 30 + Math.min(((bmi - 30) / 10), 1) * 20;
                }

                bmiStatus.textContent = status;
                bmiStatus.style.color = color;
                bmiDetails.textContent = details;
                motivationQuote.textContent = quote;

                // Position BMI meter pointer
                bmiMeterPointer.style.left = ${Math.min(Math.max(pointerPosition, 0), 50)}%;

                // Show additional sections
                bmiDetails.style.display = 'block';
                motivationQuote.style.display = 'block';
                infoLink.style.display = 'inline-block';
                infoLink.href = linkHref;
                infoLink.textContent = linkText;
            } else {
                alert("Enter valid weight and height");
            }
        }
