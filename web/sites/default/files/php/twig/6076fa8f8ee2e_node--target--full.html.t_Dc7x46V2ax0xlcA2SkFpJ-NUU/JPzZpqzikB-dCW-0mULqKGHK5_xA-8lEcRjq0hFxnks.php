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
        $context["classes"] = [0 => "target-full", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 5
($context["node"] ?? null), "bundle", [], "any", false, false, true, 5), 5, $this->source))), 3 => ((        // line 6
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 6, $this->source)))) : (""))];
        // line 9
        echo "
<article";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 10), 10, $this->source), "html", null, true);
        echo ">

  <div class=\"target-full__wrapper\">
    ";
        // line 13
        $context["field_image_target"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_image_target", [], "any", false, false, true, 13), 13, $this->source));
        // line 14
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_image_target"] ?? null))) {
            // line 15
            echo "    <div class=\"target-full__image\">
      ";
            // line 16
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_image_target"] ?? null), 16, $this->source), "html", null, true);
            echo "
    </div>    
    ";
        }
        // line 19
        echo "    ";
        $context["field_target_text"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_target_text", [], "any", false, false, true, 19), 19, $this->source));
        // line 20
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_target_text"] ?? null))) {
            // line 21
            echo "    <div class=\"target-full__text\">
      ";
            // line 22
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_target_text"] ?? null), 22, $this->source), "html", null, true);
            echo "
    </div>
    ";
        }
        // line 25
        echo "  </div>

  ";
        // line 27
        $context["field_galary"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_galary", [], "any", false, false, true, 27), 27, $this->source));
        // line 28
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_galary"] ?? null))) {
            // line 29
            echo "  <div class=\"target-full__gallary\">
    ";
            // line 30
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_galary"] ?? null), 30, $this->source), "html", null, true);
            echo "
  </div>
  ";
        }
        // line 33
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "body", [], "any", false, false, true, 33), 33, $this->source), "html", null, true);
        echo "
</article>";
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
        return array (  99 => 33,  93 => 30,  90 => 29,  87 => 28,  85 => 27,  81 => 25,  75 => 22,  72 => 21,  69 => 20,  66 => 19,  60 => 16,  57 => 15,  54 => 14,  52 => 13,  46 => 10,  43 => 9,  41 => 6,  40 => 5,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{%
  set classes = [
    'target-full',
    'node',
    'node-' ~ node.bundle|clean_class,
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}

<article{{ attributes.addClass(classes) }}>

  <div class=\"target-full__wrapper\">
    {% set field_image_target = content.field_image_target|render %}
    {% if field_image_target|length %}
    <div class=\"target-full__image\">
      {{ field_image_target }}
    </div>    
    {% endif %}
    {% set field_target_text = content.field_target_text|render %}
    {% if field_target_text|length %}
    <div class=\"target-full__text\">
      {{ field_target_text }}
    </div>
    {% endif %}
  </div>

  {% set field_galary = content.field_galary|render %}
  {% if field_galary|length %}
  <div class=\"target-full__gallary\">
    {{ field_galary }}
  </div>
  {% endif %}
{{ content.body }}
</article>", "sites/default/themes/custom/start_theme/templates/content/node--target--full.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/content/node--target--full.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 14);
        static $filters = array("clean_class" => 5, "escape" => 10, "render" => 13, "length" => 14);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'render', 'length'],
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
