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

/* sites/default/themes/custom/start_theme/templates/content/node--news--search-result.html.twig */
class __TwigTemplate_73005b9d3deb9f514e39c8f2c74e75ce7000834b559cfedd4618d789869d0153 extends \Twig\Template
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
        // line 2
        $context["classes"] = [0 => "news-search", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 5
($context["node"] ?? null), "bundle", [], "any", false, false, true, 5), 5, $this->source))), 3 => ((        // line 6
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 6, $this->source)))) : (""))];
        // line 9
        echo "
<div";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 10), 10, $this->source), "html", null, true);
        echo ">

  <h2 class=\"news-search__title\"><a href=\"";
        // line 12
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 12, $this->source), "html", null, true);
        echo "\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 12, $this->source), "html", null, true);
        echo "</a></h2>
  <a href=\"";
        // line 13
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null), 13, $this->source), "html", null, true);
        echo "\" class=\"news-search__link\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url_absolute"] ?? null), 13, $this->source), "html", null, true);
        echo "</a>
  <div class=\"news-search__created\">";
        // line 14
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, twig_date_format_filter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["node"] ?? null), "getCreatedTime", [], "method", false, false, true, 14), 14, $this->source), "d.m.Y"), "html", null, true);
        echo "</div>
  ";
        // line 15
        $context["field_tegs"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_tegs", [], "any", false, false, true, 15), 15, $this->source));
        // line 16
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_tegs"] ?? null))) {
            // line 17
            echo "  <div class=\"news-search__tags\">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_tegs", [], "any", false, false, true, 17), 17, $this->source), "html", null, true);
            echo "</div>
  ";
        }
        // line 19
        echo "  <div class=\"news-search__text\">";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_text", [], "any", false, false, true, 19), 19, $this->source), "html", null, true);
        echo "</div>

</div>

";
    }

    public function getTemplateName()
    {
        return "sites/default/themes/custom/start_theme/templates/content/node--news--search-result.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  78 => 19,  72 => 17,  69 => 16,  67 => 15,  63 => 14,  57 => 13,  51 => 12,  46 => 10,  43 => 9,  41 => 6,  40 => 5,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{%
  set classes = [
    'news-search',
    'node',
    'node-' ~ node.bundle|clean_class,
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}

<div{{ attributes.addClass(classes) }}>

  <h2 class=\"news-search__title\"><a href=\"{{ url }}\">{{ label }}</a></h2>
  <a href=\"{{ url }}\" class=\"news-search__link\">{{ url_absolute }}</a>
  <div class=\"news-search__created\">{{ node.getCreatedTime()|date(\"d.m.Y\") }}</div>
  {% set field_tegs = content.field_tegs|render %}
  {% if field_tegs|length %}
  <div class=\"news-search__tags\">{{ content.field_tegs }}</div>
  {% endif %}
  <div class=\"news-search__text\">{{ content.field_text }}</div>

</div>

", "sites/default/themes/custom/start_theme/templates/content/node--news--search-result.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/content/node--news--search-result.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 16);
        static $filters = array("clean_class" => 5, "escape" => 10, "date" => 14, "render" => 15, "length" => 16);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'date', 'render', 'length'],
                []
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
