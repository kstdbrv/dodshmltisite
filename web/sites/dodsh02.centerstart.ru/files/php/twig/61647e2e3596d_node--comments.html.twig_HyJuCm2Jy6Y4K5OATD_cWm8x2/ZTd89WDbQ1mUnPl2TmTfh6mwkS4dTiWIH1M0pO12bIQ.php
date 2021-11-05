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

/* sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--comments.html.twig */
class __TwigTemplate_cc60c103cf8b6206deb9640e76727a32e0d9334f09e0d727b490ef3f87ed4009 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 70, "if" => 81];
        $filters = ["clean_class" => 73, "escape" => 78, "render" => 80, "length" => 81];
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
        // line 70
        $context["classes"] = [0 => "comments", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 73
($context["node"] ?? null), "bundle", [])))), 3 => ((        // line 74
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 77
        echo "
<div";
        // line 78
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">

  ";
        // line 80
        $context["field_photo"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_photo", [])));
        // line 81
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_photo"] ?? null))) {
            // line 82
            echo "  <div class=\"comments__photo\">
    ";
            // line 83
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_photo", [])), "html", null, true);
            echo "
  </div>
  ";
        }
        // line 86
        echo "  ";
        $context["field_name"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_name", [])));
        // line 87
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_name"] ?? null))) {
            // line 88
            echo "  <div class=\"comments__name\">
    ";
            // line 89
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_name", [])), "html", null, true);
            echo "
  </div>
  ";
        }
        // line 92
        echo "  <div class=\"comments__comment\">
    ";
        // line 93
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_comment", [])), "html", null, true);
        echo "
  </div>
  ";
        // line 95
        $context["field_face"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_face", [])));
        // line 96
        echo "  ";
        if (twig_length_filter($this->env, ($context["field_face"] ?? null))) {
            // line 97
            echo "  <div class=\"comments__face\">
    ";
            // line 98
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_face", [])), "html", null, true);
            echo "
  </div>
  ";
        }
        // line 101
        echo "
</div>

";
        // line 106
        echo "
";
        // line 109
        echo "
";
    }

    public function getTemplateName()
    {
        return "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--comments.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  126 => 109,  123 => 106,  118 => 101,  112 => 98,  109 => 97,  106 => 96,  104 => 95,  99 => 93,  96 => 92,  90 => 89,  87 => 88,  84 => 87,  81 => 86,  75 => 83,  72 => 82,  69 => 81,  67 => 80,  62 => 78,  59 => 77,  57 => 74,  56 => 73,  55 => 70,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--comments.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--comments.html.twig");
    }
}
