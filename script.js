<script>
        const links = document.querySelectorAll('.category-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            });
        });
    </script>