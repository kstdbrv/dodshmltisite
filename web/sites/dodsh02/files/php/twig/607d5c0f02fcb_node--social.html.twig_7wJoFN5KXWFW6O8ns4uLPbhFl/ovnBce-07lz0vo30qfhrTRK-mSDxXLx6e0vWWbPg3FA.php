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

/* sites/dodsh02/themes/custom/start_theme/templates/content/node--social.html.twig */
class __TwigTemplate_f785996ec8aeaae935573aab3190440b4f558facad81eb805e85525854978e53 extends \Twig\Template
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
        $context["classes"] = [0 => "social-links", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 5
($context["node"] ?? null), "bundle", [], "any", false, false, true, 5), 5, $this->source))), 3 => ((        // line 6
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 6, $this->source)))) : (""))];
        // line 9
        echo "
 <ul";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 10), 10, $this->source), "html", null, true);
        echo ">
  ";
        // line 11
        $context["field_social_link"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_social_link", [], "any", false, false, true, 11), 11, $this->source));
        // line 12
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_social_link"] ?? null))) {
            // line 13
            echo "   <li class=\"social-links__vk\">
    ";
            // line 14
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_social_link"] ?? null), 14, $this->source), "html", null, true);
            echo "
   </li>
  ";
        }
        // line 17
        echo "
  ";
        // line 18
        $context["field_ok"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_ok", [], "any", false, false, true, 18), 18, $this->source));
        // line 19
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_ok"] ?? null))) {
            // line 20
            echo "   <li class=\"social-links__ok\">
    ";
            // line 21
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_ok"] ?? null), 21, $this->source), "html", null, true);
            echo "
   </li>
   ";
        }
        // line 24
        echo "
   ";
        // line 25
        $context["field_facebook"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_facebook", [], "any", false, false, true, 25), 25, $this->source));
        // line 26
        echo "   ";
        if (twig_length_filter($this->env, ($context["field_facebook"] ?? null))) {
            // line 27
            echo "    <li class=\"social-links__facebook\">
     ";
            // line 28
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_facebook"] ?? null), 28, $this->source), "html", null, true);
            echo "
    </li>
    ";
        }
        // line 31
        echo "
    ";
        // line 32
        $context["field_instagram"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_instagram", [], "any", false, false, true, 32), 32, $this->source));
        // line 33
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_instagram"] ?? null))) {
            // line 34
            echo "     <li class=\"social-links__instagram\">
      ";
            // line 35
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_instagram"] ?? null), 35, $this->source), "html", null, true);
            echo "
     </li>
     ";
        }
        // line 38
        echo "
    ";
        // line 39
        $context["field_utube"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["content"] ?? null), "field_utube", [], "any", false, false, true, 39), 39, $this->source));
        // line 40
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_utube"] ?? null))) {
            // line 41
            echo "     <li class=\"social-links__ytube\">
       ";
            // line 42
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_utube"] ?? null), 42, $this->source), "html", null, true);
            echo "
     </li>
    ";
        }
        // line 45
        echo " </ul>
 
 <div class=\"views-field-edit-node\">
  <a href=\"/node/76/edit?destination=/node\" hreflang=\"ru\">изменить</a>
 </div>
";
    }

    public function getTemplateName()
    {
        return "sites/dodsh02/themes/custom/start_theme/templates/content/node--social.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  132 => 45,  126 => 42,  123 => 41,  120 => 40,  118 => 39,  115 => 38,  109 => 35,  106 => 34,  103 => 33,  101 => 32,  98 => 31,  92 => 28,  89 => 27,  86 => 26,  84 => 25,  81 => 24,  75 => 21,  72 => 20,  69 => 19,  67 => 18,  64 => 17,  58 => 14,  55 => 13,  52 => 12,  50 => 11,  46 => 10,  43 => 9,  41 => 6,  40 => 5,  39 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{%
  set classes = [
    'social-links',
    'node',
    'node-' ~ node.bundle|clean_class,
    view_mode ? 'node--view-mode-' ~ view_mode|clean_class,
  ]
%}

 <ul{{ attributes.addClass(classes) }}>
  {% set field_social_link = content.field_social_link|render %}
  {% if field_social_link|length %}
   <li class=\"social-links__vk\">
    {{ field_social_link }}
   </li>
  {% endif %}

  {% set field_ok = content.field_ok|render %}
  {% if field_ok|length %}
   <li class=\"social-links__ok\">
    {{ field_ok }}
   </li>
   {% endif %}

   {% set field_facebook = content.field_facebook|render %}
   {% if field_facebook|length %}
    <li class=\"social-links__facebook\">
     {{ field_facebook }}
    </li>
    {% endif %}

    {% set field_instagram = content.field_instagram|render %}
    {% if field_instagram|length %}
     <li class=\"social-links__instagram\">
      {{ field_instagram }}
     </li>
     {% endif %}

    {% set field_utube = content.field_utube|render %}
    {% if field_utube|length %}
     <li class=\"social-links__ytube\">
       {{ field_utube }}
     </li>
    {% endif %}
 </ul>
 
 <div class=\"views-field-edit-node\">
  <a href=\"/node/76/edit?destination=/node\" hreflang=\"ru\">изменить</a>
 </div>
", "sites/dodsh02/themes/custom/start_theme/templates/content/node--social.html.twig", "/var/www/html/web/sites/dodsh02/themes/custom/start_theme/templates/content/node--social.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 2, "if" => 12);
        static $filters = array("clean_class" => 5, "escape" => 10, "render" => 11, "length" => 12);
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
