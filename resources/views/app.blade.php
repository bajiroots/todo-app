<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.4/css/jquery.dataTables.min.css">
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        @inertiaHead
        <style>
        body {
            background-color: lightgray
        }
        </style>
    </head>
    <body>

        @inertia
        
    </body>

    {{-- <script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script>
        $(document).ready( function () {
            $('#table').DataTables();
        } );
    </script> --}}
</html>