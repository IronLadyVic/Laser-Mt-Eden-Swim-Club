//search function

<script type="text/javascript">
    document.getElementById('searchForm').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=site:lasermtedenswimclub.co.nz ' + document.getElementById('txtsearch').value;
        return false;
    }
</script>