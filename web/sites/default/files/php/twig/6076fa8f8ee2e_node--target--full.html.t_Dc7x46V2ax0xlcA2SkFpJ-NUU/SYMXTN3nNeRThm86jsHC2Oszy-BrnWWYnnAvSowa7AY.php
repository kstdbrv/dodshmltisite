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

/* sites/default/themes/custom/start_theme/templates/content/node--target--full.html.twig */
class __TwigTemplate_d4a0c25bf757592ab0ad535fc1cf556dac8a5c700152f65f2b52541dcf54209e extends \Twig\Template
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
        $context["classes"] = [0 => "news-full", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 5
($context["node"] ?? null), "bundle", [], "any", false, false, true, 5), 5, $this->source))), 3 => ((        // line 6
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 6, $this->source)))) : (""))];
        // line 9
        echo "
<article";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 10), 10, $this->source), "html", null, true);
        echo ">

  <div class=\"news-full__wrapper\">
    ";
        // line 13
        $context["field_image_news"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image_news", [], "any", false, false, true, 13), 13, $this->source));
        // line 14
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_image_news"] ?? null))) {
            // line 15
            echo "    <div class=\"news-full__image\">
      ";
            // line 16
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_image_news"] ?? null), 16, $this->source), "html", null, true);
            echo "
    </div>    
    ";
        } else {
            // line 19
            echo "    <div class=\"news-full__no-img\"></div>
    ";
        }
        // line 21
        echo "    <div class=\"news-full__text\">
      ";
        // line 22
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_text"] ?? null), 22, $this->source), "html", null, true);
        echo "
    </div>
  </div>

  <div class=\"news-full__text-extra\">
    ";
        // line 27
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_extra_text"] ?? null), 27, $this->source), "html", null, true);
        echo "
  </div>
  <div class=\"news-full__gallary\">
    ";
        // line 30
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_image"] ?? null), 30, $this->source), "html", null, true);
        echo "
  </div>
  ";
        // line 32
        $context["field_tegs"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_tegs", [], "any", false, false, true, 32), 32, $this->source));
        // line 33
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_tegs"] ?? null))) {
            // line 34
            echo "  <div class=\"news-full__tags\">
    ";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_tegs"] ?? null), 35, $this->source), "html", null, true);
            echo "
  </div>
  ";
        }
        // line 38
        echo "  <div class=\"news-full__social\">
    ";
        // line 39
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->extensions['Drupal\Core\Template\TwigExtension']->withoutFilter($this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 39, $this->source), "field_image_news", "field_text", "field_extra_text", "field_tegs", "field_image"), "html", null, true);
        echo "
  </div>
</article>
";
    }

    public function getTemplateName()
    {
        return "sites/default/themes/custom/start_theme/templates/content/node--target--full.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  109 => 39,  106 => 38,  100 => 35,  97 => 34,  94 => 33,  92 => 32,  87 => 30,  81 => 27,  73 => 22,  70 => 21,  66 => 19,  60 => 16,  57 => 15,  54 => 14,  52 => 13,  46 => 10,  43 => 9,  41 => 6,  40 => 5,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{%
  set classes = [
    'news-full',
    'node',
    'node-' ~ node.bundle|clean_class,
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}

<article{{ attributes.addClass(classes) }}>

  <div class=\"news-full__wrapper\">
    {% set field_image_news = content.field_image_news|render %}
    {% if field_image_news|length %}
    <div class=\"news-full__image\">
      {{ field_image_news }}
    </div>    
    {% else %}
    <div class=\"news-full__no-img\"></div>
    {% endif %}
    <div class=\"news-full__text\">
      {{ field_text }}
    </div>
  </div>

  <div class=\"news-full__text-extra\">
    {{ field_extra_text }}
  </div>
  <div class=\"news-full__gallary\">
    {{ field_image }}
  </div>
  {% set field_tegs = content.field_tegs|render %}
  {% if field_tegs|length %}
  <div class=\"news-full__tags\">
    {{ field_tegs }}
  </div>
  {% endif %}
  <div class=\"news-full__social\">
    {{ content|without('field_image_news', 'field_text', 'field_extra_text', 'field_tegs', 'field_image') }}
  </div>
</article>
", "sites/default/themes/custom/start_theme/templates/content/node--target--full.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/content/node--target--full.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 14);
        static $filters = array("clean_class" => 5, "escape" => 10, "render" => 13, "length" => 14, "without" => 39);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'render', 'length', 'without'],
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
