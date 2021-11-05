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

/* sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/node--socialnye_seti.html.twig */
class __TwigTemplate_366c82ec0204f4153f335a7fb1415d7bcbe0bdf45e315ec24653ebe6eaa17e39 extends \Twig\Template
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
($context["view_mode"] ?? null)) ? (("node--type-socialnye-seti" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 9
        echo "
 <ul";
        // line 10
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  ";
        // line 11
        $context["field_vk"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_vk", [])));
        // line 12
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_vk"] ?? null))) {
            // line 13
            echo "   <li class=\"social-links__vk\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_vk"] ?? null)), "html", null, true);
            echo "</li>
  ";
        }
        // line 15
        echo "
  ";
        // line 16
        $context["field_ok"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_ok", [])));
        // line 17
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_ok"] ?? null))) {
            // line 18
            echo "   <li class=\"social-links__ok\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_ok"] ?? null)), "html", null, true);
            echo "
   </li>
   ";
        }
        // line 21
        echo "
   ";
        // line 22
        $context["field_facebook"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_facebook", [])));
        // line 23
        echo "   ";
        if (twig_length_filter($this->env, ($context["field_facebook"] ?? null))) {
            // line 24
            echo "    <li class=\"social-links__facebook\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_facebook"] ?? null)), "html", null, true);
            echo "</li>
    ";
        }
        // line 26
        echo "
    ";
        // line 27
        $context["field_instagram"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_instagram", [])));
        // line 28
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_instagram"] ?? null))) {
            // line 29
            echo "     <li class=\"social-links__instagram\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_instagram"] ?? null)), "html", null, true);
            echo "</li>
     ";
        }
        // line 31
        echo "
    ";
        // line 32
        $context["field_youtube"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_youtube", [])));
        // line 33
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_youtube"] ?? null))) {
            // line 34
            echo "     <li class=\"social-links__ytube\">";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_youtube"] ?? null)), "html", null, true);
            echo "
     </li>
    ";
        }
        // line 37
        echo " </ul>
 
 <div class=\"views-field-edit-node\">
  <a href=\"/node/76/edit?destination=/node\" hreflang=\"ru\">изменить</a>
 </div>
";
    }

    public function getTemplateName()
    {
        return "sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/node--socialnye_seti.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  135 => 37,  128 => 34,  125 => 33,  123 => 32,  120 => 31,  114 => 29,  111 => 28,  109 => 27,  106 => 26,  100 => 24,  97 => 23,  95 => 22,  92 => 21,  85 => 18,  82 => 17,  80 => 16,  77 => 15,  71 => 13,  68 => 12,  66 => 11,  62 => 10,  59 => 9,  57 => 6,  56 => 5,  55 => 2,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/node--socialnye_seti.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh01.centerstart.ru/themes/custom/theme1/templates/node--socialnye_seti.html.twig");
    }
}
