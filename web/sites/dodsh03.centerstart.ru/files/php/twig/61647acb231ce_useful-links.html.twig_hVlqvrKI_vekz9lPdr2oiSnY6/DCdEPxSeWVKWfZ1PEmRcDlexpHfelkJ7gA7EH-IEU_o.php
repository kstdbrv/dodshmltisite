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

/* modules/custom/useful_links/templates/useful-links.html.twig */
class __TwigTemplate_cd607dd508971c030843497a2cb149c694ab3303baa3f6656dc13a208b28ebf2 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 4];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
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
        // line 1
        echo "


<div";
        // line 4
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => "useful-links"], "method")), "html", null, true);
        echo ">
  <div class=\"useful-links__container\">
    <div class=\"useful-links__content\">
        <a 
          class=\"useful-links__item\"
          href=\"https://edu.gov.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 12
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "guv-aduc.png\" alt=\"Министерство просвещения Российской Федерации\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Министерство просвещения Российской Федерации
          </p>
        </a>
        <a 
          class=\"useful-links__item\"
          href=\"https://www.gosuslugi.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 22
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "ser-guv.png\" alt=\"Портал государственных услуг Российской Федерации\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Портал государственных услуг Российской Федерации
          </p>
        </a>
        <a 
          class=\"useful-links__item\"
          href=\"http://do.krd.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 32
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "do-krd.png\" alt=\"Департамент образования администрации муниципального образования город Краснодар\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Департамент образования администрации муниципального образования город Краснодар
          </p>
        </a>
        <a 
          class=\"useful-links__item\"
          href=\"http://iro23.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 42
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "univ-up.png\" alt=\"Институт Развития Образования Краснодарского Края\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Институт Развития Образования Краснодарского Края
          </p>
        </a>
        <a 
          class=\"useful-links__item\"
          href=\"http://www.edu.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 52
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "rus-educ.png\" alt=\"Российское образование\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Российское образование
          </p>
        </a>
        <a 
          class=\"useful-links__item\"
          href=\"http://fcior.edu.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 62
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "fz-sourses.png\" alt=\"Федеральный Центр информационно-образовательных ресурсов\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Федеральный Центр информационно-образовательных ресурсов
          </p>
        </a>
        <a 
          class=\"useful-links__item\"
          href=\"http://centerstart.ru/\"
          target=\"_blank\"
        >
          <img src=\"";
        // line 72
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["path"] ?? null)), "html", null, true);
        echo "start.png\" alt=\"Краснодарский методический центр Старт\" typeof=\"Image\">
          <p class=\"useful-links__text\">
            Краснодарский методический центр Старт
          </p>
        </a>
    </div>
  </div>
</div>";
    }

    public function getTemplateName()
    {
        return "modules/custom/useful_links/templates/useful-links.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  149 => 72,  136 => 62,  123 => 52,  110 => 42,  97 => 32,  84 => 22,  71 => 12,  60 => 4,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "modules/custom/useful_links/templates/useful-links.html.twig", "/var/www-ds/dodshmultisite/web/modules/custom/useful_links/templates/useful-links.html.twig");
    }
}
