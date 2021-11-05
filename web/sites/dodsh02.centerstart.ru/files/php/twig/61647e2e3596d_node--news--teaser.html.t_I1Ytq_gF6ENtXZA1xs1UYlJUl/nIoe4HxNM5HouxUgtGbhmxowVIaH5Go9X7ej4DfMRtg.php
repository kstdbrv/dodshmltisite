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

/* sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig */
class __TwigTemplate_4208952990c7806a3a5b9f8fcef1ff113a563ea97aba1557b915da7564e65199 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 70, "if" => 81];
        $filters = ["clean_class" => 73, "escape" => 78, "render" => 80, "length" => 81, "date" => 102];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['clean_class', 'escape', 'render', 'length', 'date'],
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
        $context["classes"] = [0 => "news-teaser", 1 => "node", 2 => ("node-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed($this->getAttribute(        // line 73
($context["node"] ?? null), "bundle", [])))), 3 => ((        // line 74
($context["view_mode"] ?? null)) ? (("node--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null))))) : (""))];
        // line 77
        echo "
<article";
        // line 78
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
        echo ">
  <div class=\"news-teaser__image\">
  ";
        // line 80
        $context["field_image_news"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_image_news", [])));
        // line 81
        echo "    ";
        if (twig_length_filter($this->env, ($context["field_image_news"] ?? null))) {
            // line 82
            echo "      ";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_image_news"] ?? null)), "html", null, true);
            echo "
  ";
        } else {
            // line 84
            echo "    <div class=\"news-teaser__no-img\"></div>
  ";
        }
        // line 86
        echo "  </div>
  <div class=\"news-teaser__wrapper\">
    <div class=\"news-teaser__title\">
      ";
        // line 89
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null)), "html", null, true);
        echo "
    </div>
    ";
        // line 91
        $context["field_tegs"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_tegs", [])));
        // line 92
        echo "      ";
        if (twig_length_filter($this->env, ($context["field_tegs"] ?? null))) {
            // line 93
            echo "      <div class=\"news-teaser__tags\">
        ";
            // line 94
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["content"] ?? null), "field_tegs", [])), "html", null, true);
            echo "
      </div>
      ";
        }
        // line 97
        echo "    <div class=\"news-teaser__bottom\">
      <div class=\"news-teaser__statistics\">
        ";
        // line 99
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["statistics"] ?? null)), "html", null, true);
        echo "
      </div>
      <div class=\"news-teaser__created\">
        <span>";
        // line 102
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["node"] ?? null), "getCreatedTime", [], "method")), "d.m.Y"), "html", null, true);
        echo "</span>  
      </div>
    </div>
  </div>

  <a href=\"";
        // line 107
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["url"] ?? null)), "html", null, true);
        echo "\" class=\"news-teaser__link\">
    <span class=\"news-teaser__hover-text\">Смотреть новость</span>
  </a>
  
</article>

";
        // line 115
        echo "
";
        // line 118
        echo "
";
    }

    public function getTemplateName()
    {
        return "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  136 => 118,  133 => 115,  124 => 107,  116 => 102,  110 => 99,  106 => 97,  100 => 94,  97 => 93,  94 => 92,  92 => 91,  87 => 89,  82 => 86,  78 => 84,  72 => 82,  69 => 81,  67 => 80,  62 => 78,  59 => 77,  57 => 74,  56 => 73,  55 => 70,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig", "/var/www-ds/dodshmultisite/web/sites/dodsh02.centerstart.ru/themes/custom/start_theme/templates/content/node--news--teaser.html.twig");
    }
}
