function enqueue_styles_and_scripts()
{
    wp_enqueue_script('leafletjs', get_template_directory_uri() . '/path/to/leaflet-example.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_styles_and_scripts');
