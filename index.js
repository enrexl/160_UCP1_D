<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const arrow = document.querySelector('.explore-btn::after');
        const cards = document.querySelectorAll('.card');

        arrow.parentElement.addEventListener('mouseenter', function() {
            arrow.classList.add('animate');
        });

        arrow.parentElement.addEventListener('mouseleave', function() {
            arrow.classList.remove('animate');
        });

        function findMaxHeight(cards) {
            let maxHeight = 0;
            cards.forEach(card => {
                const height = card.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            return maxHeight;
        }

        function setCardHeight(cards, height) {
            cards.forEach(card => {
                card.style.height = height + 'px';
            });
        }

        const maxHeight = findMaxHeight(cards);
        setCardHeight(cards, maxHeight);

        function updateDateTime() {
            var now = new Date();
            var datetimeElement = document.getElementById("datetime");
            datetimeElement.innerHTML = now.toLocaleString();
        }

        setInterval(updateDateTime, 1000);

        updateDateTime();
    });
</script>
