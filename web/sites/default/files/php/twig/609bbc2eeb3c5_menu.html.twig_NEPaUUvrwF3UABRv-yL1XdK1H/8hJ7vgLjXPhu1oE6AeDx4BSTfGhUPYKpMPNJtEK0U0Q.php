<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* menu.html.twig */
class __TwigTemplate_b2601b80d2c17e9fa49c61d930da50d5bf7a4ca908b3d85f7eb6b6387421dd16 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 21
        $macros["menus"] = $this->macros["menus"] = $this;
        // line 26
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [($context["items"] ?? null), ($context["attributes"] ?? null), 0], 26, $context, $this->getSourceContext()));
        echo "

";
        // line 60
        echo "



";
        // line 109
        echo "


";
    }

    // line 28
    public function macro_menu_links($__items__ = null, $__attributes__ = null, $__menu_level__ = null, ...$__varargs__)
    {
        $macros = $this->macros;
        $context = $this->env->mergeGlobals([
            "items" => $__items__,
            "attributes" => $__attributes__,
            "menu_level" => $__menu_level__,
            "varargs" => $__varargs__,
        ]);

        $blocks = [];

        ob_start();
        try {
            // line 29
            echo "  ";
            $macros["menus"] = $this;
            // line 30
            echo "  ";
            if (($context["items"] ?? null)) {
                // line 31
                echo "    ";
                if ((($context["menu_level"] ?? null) == 0)) {
                    echo " 
      <ul ";
                    // line 32
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "main-menu"], "method", false, false, true, 32), 32, $this->source), "html", null, true);
                    echo ">
    ";
                } elseif ((                // line 33
($context["menu_level"] ?? null) == 1)) {
                    // line 34
                    echo "      <ul class=\"main-menu submenu\">
    ";
                } else {
                    // line 36
                    echo "      <ul class=\"main-menu submenu-2\">
    ";
                }
                // line 38
                echo "    ";
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                    // line 39
                    echo "      ";
                    // line 40
                    $context["classes"] = [0 => "main-menu__item", 1 => ((twig_get_attribute($this->env, $this->source,                     // line 42
$context["item"], "is_expanded", [], "any", false, false, true, 42)) ? ("main-menu__item_collapsed") : ("")), 2 => ((twig_get_attribute($this->env, $this->source,                     // line 43
$context["item"], "is_collapsed", [], "any", false, false, true, 43)) ? ("main-menu__item_collapsed-real") : ("")), 3 => ((twig_get_attribute($this->env, $this->source,                     // line 44
$context["item"], "in_active_trail", [], "any", false, false, true, 44)) ? ("main-menu__item_active-trail") : (""))];
                    // line 47
                    echo "        <li ";
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["item"], "attributes", [], "any", false, false, true, 47), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 47), 47, $this->source), "html", null, true);
                    echo ">
        ";
                    // line 48
                    echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->getLink($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "title", [], "any", false, false, true, 48), 48, $this->source), $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, $context["item"], "url", [], "any", false, false, true, 48), 48, $this->source)), "html", null, true);
                    echo "
        ";
                    // line 49
                    if (twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 49)) {
                        // line 50
                        echo "          ";
                        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(twig_call_macro($macros["menus"], "macro_menu_links", [twig_get_attribute($this->env, $this->source, $context["item"], "below", [], "any", false, false, true, 50), ($context["attributes"] ?? null), (($context["menu_level"] ?? null) + 1)], 50, $context, $this->getSourceContext()));
                        echo "
        ";
                    }
                    // line 52
                    echo "      </li>
    ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 54
                echo "    </ul>
  ";
            }
            // line 56
            echo "
  ";
            // line 58
            echo "
";

            return ('' === $tmp = ob_get_contents()) ? '' : new Markup($tmp, $this->env->getCharset());
        } finally {
            ob_end_clean();
        }
    }

    public function getTemplateName()
    {
        return "menu.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  142 => 58,  139 => 56,  135 => 54,  128 => 52,  122 => 50,  120 => 49,  116 => 48,  111 => 47,  109 => 44,  108 => 43,  107 => 42,  106 => 40,  104 => 39,  99 => 38,  95 => 36,  91 => 34,  89 => 33,  85 => 32,  80 => 31,  77 => 30,  74 => 29,  59 => 28,  52 => 109,  46 => 60,  41 => 26,  39 => 21,);
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Theme override to display a menu.
 *
 * Available variables:
 * - menu_name: The machine name of the menu.
 * - items: A nested list of menu items. Each menu item contains:
 *   - attributes: HTML attributes for the menu item.
 *   - below: The menu item child items.
 *   - title: The menu link title.
 *   - url: The menu link url, instance of \\Drupal\\Core\\Url
 *   - localized_options: Menu link localized options.
 *   - is_expanded: TRUE if the link has visible children within the current
 *     menu tree.
 *   - is_collapsed: TRUE if the link has children within the current menu tree
 *     that are not currently visible.
 *   - in_active_trail: TRUE if the link is in the active trail.
 */
#}
{% import _self as menus %}
{#
  We call a macro which calls itself to render the full tree.
  @see https://twig.symfony.com/doc/1.x/tags/macro.html
#}
{{ menus.menu_links(items, attributes, 0) }}

{% macro menu_links(items, attributes, menu_level) %}
  {% import _self as menus %}
  {% if items %}
    {% if menu_level == 0 %} 
      <ul {{ attributes.addClass('main-menu') }}>
    {% elseif menu_level == 1 %}
      <ul class=\"main-menu submenu\">
    {% else %}
      <ul class=\"main-menu submenu-2\">
    {% endif %}
    {% for item in items %}
      {%
        set classes = [
          'main-menu__item',
          item.is_expanded ? 'main-menu__item_collapsed',
          item.is_collapsed ? 'main-menu__item_collapsed-real',
          item.in_active_trail ? 'main-menu__item_active-trail',
        ]
      %}
        <li {{ item.attributes.addClass(classes) }}>
        {{ link(item.title, item.url) }}
        {% if item.below %}
          {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
        {% endif %}
      </li>
    {% endfor %}
    </ul>
  {% endif %}

  {# {{ kint() }} #}

{% endmacro %}




{# 
{% import _self as menus %}


{{ menus.menu_links(items, attributes, 0) }}

{% macro menu_links(items, attributes, menu_level) %}
  {% import _self as menus %}
  {% if items %}
    {% if menu_level == 0 %}
      <ul{{ attributes.addClass('menu-main') }}>
    {% elseif menu_level == 1 %}
      <ul class=\"menu-main submenu\">
    {% else %}
      <ul class=\"menu-main submenu-2\">
    {% endif %}
    {% for item in items %}
      {%
        set classes = [
          'menu-main__item',
          item.is_expanded ? 'menu-main__item_collapsed',
          menu_level == 2 ? 'collapsed-2',
          item.is_collapsed ? 'menu-main__item_collapsed-real',
          item.in_active_trail ? 'menu-main__item_active-trail',
        ]
      %}
      {% if menu_level == 0 %}
        <li {{ item.attributes.addClass(classes) }} id=\"subs-1\">
      {% elseif menu_level == 1 %}
        <li {{ item.attributes.addClass(classes) }} id=\"subs-2\">
      {% else %}
        <li {{ item.attributes.addClass(classes) }}>
      {% endif %}
        {{ link(item.title, item.url) }}
        {% if item.below %}
          {{ menus.menu_links(item.below, attributes, menu_level + 1) }}
        {% endif %}
      </li>
    {% endfor %}
    </ul>
  {% endif %}



{% endmacro %} #}



", "menu.html.twig", "sites/default/themes/custom/start_theme/templates/navigation/menu.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("import" => 21, "macro" => 28, "if" => 30, "for" => 38, "set" => 40);
        static $filters = array("escape" => 32);
        static $functions = array("link" => 48);

        try {
            $this->sandbox->checkSecurity(
                ['import', 'macro', 'if', 'for', 'set'],
                ['escape'],
                ['link']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
