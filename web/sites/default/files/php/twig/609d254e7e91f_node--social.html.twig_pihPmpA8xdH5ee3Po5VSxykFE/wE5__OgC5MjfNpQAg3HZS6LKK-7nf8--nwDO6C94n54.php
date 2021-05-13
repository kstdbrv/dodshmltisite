<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* sites/default/themes/custom/start_theme/templates/content/node--social.html.twig */
class __TwigTemplate_b469d14517436316f2ffd43290ff3fce85f82a60faa43954308b740f0a2a65df extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 2, "if" => 12];
        $filters = ["clean_class" => 5, "escape" => 10, "render" => 11, "length" => 12];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'render', 'length'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

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

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 2
        $context["classes"] = [0 => "social-links", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 5
($context["node"] ?? null), "bundle", [])))), 3 => ((        // line 6
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 9
        echo "
 <ul";
        // line 10
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  ";
        // line 11
        $context["field_social_link"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_social_link", [])));
        // line 12
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_social_link"] ?? null))) {
            // line 13
            echo "   <li class=\"social-links__vk\">
    ";
            // line 14
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_social_link"] ?? null)), "html", null, true);
            echo "
   </li>
  ";
        }
        // line 17
        echo "
  ";
        // line 18
        $context["field_ok"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_ok", [])));
        // line 19
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_ok"] ?? null))) {
            // line 20
            echo "   <li class=\"social-links__ok\">
    ";
            // line 21
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_ok"] ?? null)), "html", null, true);
            echo "
   </li>
   ";
        }
        // line 24
        echo "
   ";
        // line 25
        $context["field_facebook"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_facebook", [])));
        // line 26
        echo "   ";
        if (twig_length_filter($this->env, ($context["field_facebook"] ?? null))) {
            // line 27
            echo "    <li class=\"social-links__facebook\">
     ";
            // line 28
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_facebook"] ?? null)), "html", null, true);
            echo "
    </li>
    ";
        }
        // line 31
        echo "
    ";
        // line 32
        $context["field_instagram"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_instagram", [])));
        // line 33
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_instagram"] ?? null))) {
            // line 34
            echo "     <li class=\"social-links__instagram\">
      ";
            // line 35
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_instagram"] ?? null)), "html", null, true);
            echo "
     </li>
     ";
        }
        // line 38
        echo "
    ";
        // line 39
        $context["field_utube"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_utube", [])));
        // line 40
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_utube"] ?? null))) {
            // line 41
            echo "     <li class=\"social-links__ytube\">
       ";
            // line 42
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_utube"] ?? null)), "html", null, true);
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
        return "sites/default/themes/custom/start_theme/templates/content/node--social.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  148 => 45,  142 => 42,  139 => 41,  136 => 40,  134 => 39,  131 => 38,  125 => 35,  122 => 34,  119 => 33,  117 => 32,  114 => 31,  108 => 28,  105 => 27,  102 => 26,  100 => 25,  97 => 24,  91 => 21,  88 => 20,  85 => 19,  83 => 18,  80 => 17,  74 => 14,  71 => 13,  68 => 12,  66 => 11,  62 => 10,  59 => 9,  57 => 6,  56 => 5,  55 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/default/themes/custom/start_theme/templates/content/node--social.html.twig", "/var/www/html/web/sites/default/themes/custom/start_theme/templates/content/node--social.html.twig");
    }
}
