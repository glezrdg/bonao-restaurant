import Image from "next/image";
import { menu, restaurantInfo } from "@/data/menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto w-full">
        {/* Construction Icon */}
        <div className="animate-float mb-6">
          <div className="relative">
            <svg
              className="w-20 h-20 text-amber-600 dark:text-amber-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-amber-500 rounded-full animate-pulse-glow" />
          </div>
        </div>

        {/* Restaurant Name */}
        <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
          <span className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
            Bonao
          </span>
          <br />
          <span className="text-2xl md:text-3xl font-light text-stone-700 dark:text-stone-300">
            Restaurant
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-sm text-amber-700 dark:text-amber-400 font-medium mb-2">
          {restaurantInfo.tagline}
        </p>

        {/* Address */}
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
          {restaurantInfo.address}
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-600/50" />
          <svg
            className="w-5 h-5 text-amber-600 dark:text-amber-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-600/50" />
        </div>

        {/* Under Construction Message */}
        <div className="bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 dark:border-amber-800/50 mb-8 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600"></span>
            </span>
            Under Construction
          </div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3 text-stone-800 dark:text-stone-100">
            Something Delicious is Cooking!
          </h2>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm mb-4">
            We&apos;re working hard to bring you an unforgettable dining experience
            with modern Dominican flavors. Our website is under construction,
            but great things are on the way!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={restaurantInfo.orderOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Order Online
            </a>
            <a
              href={restaurantInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Hours & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full max-w-2xl">
          {/* Hours */}
          <div className="bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm rounded-xl p-4 border border-amber-100/50 dark:border-amber-900/30">
            <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hours
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">{restaurantInfo.hours.weekdays}</p>
            <p className="text-sm text-stone-600 dark:text-stone-400">{restaurantInfo.hours.weekends}</p>
          </div>

          {/* Location Card */}
          <div className="bg-white/50 dark:bg-stone-800/50 backdrop-blur-sm rounded-xl p-4 border border-amber-100/50 dark:border-amber-900/30">
            <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-400 mb-2 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">{restaurantInfo.address}</p>
            <a
              href="https://maps.google.com/?q=BONAO+RESTAURANT+123+Jamaica+Avenue+Brooklyn+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300 mt-1 inline-block"
            >
              Get Directions →
            </a>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w-full max-w-2xl mb-8 rounded-xl overflow-hidden shadow-lg border border-amber-100/50 dark:border-amber-900/30">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155426.74218671335!2d-73.91945263507992!3d40.63415131722888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25c494f8e0d3d%3A0x3b5ebf623c07dad7!2sBONAO%20RESTAURANT!5e0!3m2!1sen!2sdo!4v1769661247956!5m2!1sen!2sdo"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bonao Restaurant Location"
            className="w-full"
          />
        </div>

        {/* Menu Preview */}
        <div className="w-full mb-8">
          <h3 className="text-2xl font-semibold text-stone-800 dark:text-stone-100 mb-2">
            Menu Preview
          </h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
            Click any item to order online
          </p>

          {menu.map((category) => (
            <div key={category.name} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <h4 className="text-xl font-bold text-amber-700 dark:text-amber-400">
                  {category.name}
                </h4>
                {category.nameEs && (
                  <span className="text-sm text-stone-500 dark:text-stone-500 italic">
                    ({category.nameEs})
                  </span>
                )}
                <div className="flex-1 h-px bg-amber-200/50 dark:bg-amber-800/50" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <a
                    key={item.name}
                    href={restaurantInfo.orderOnlineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/70 dark:bg-stone-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-amber-100/50 dark:border-amber-900/30 hover:shadow-lg hover:border-amber-300 dark:hover:border-amber-700 transition-all group cursor-pointer"
                  >
                    {item.image && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {item.price && (
                          <div className="absolute top-2 right-2 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                            ${item.price}
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                            Order Now
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex justify-between items-start gap-2">
                        <h5 className="font-semibold text-stone-800 dark:text-stone-100 text-left group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                          {item.name}
                        </h5>
                        {!item.image && item.price && (
                          <span className="text-amber-600 dark:text-amber-500 font-bold whitespace-nowrap">
                            ${item.price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-sm text-stone-600 dark:text-stone-400 mt-1 text-left line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {restaurantInfo.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-stone-200/80 dark:bg-stone-700/80 text-stone-600 dark:text-stone-300 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-stone-600 dark:text-stone-400">
          <a
            href={`mailto:${restaurantInfo.email}`}
            className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {restaurantInfo.email}
          </a>
          <span className="hidden sm:block text-stone-300 dark:text-stone-600">|</span>
          <a
            href={`tel:${restaurantInfo.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {restaurantInfo.phone}
          </a>
          <span className="hidden sm:block text-stone-300 dark:text-stone-600">|</span>
          <a
            href={restaurantInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-6">
          <a
            href={restaurantInfo.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
            aria-label="Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href={restaurantInfo.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white transition-all duration-300"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href={restaurantInfo.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            aria-label="TikTok"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
          </a>
          <a
            href={restaurantInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-stone-200/80 dark:bg-stone-700/80 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-stone-500 dark:text-stone-500">
        <p>&copy; {new Date().getFullYear()} Bonao Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
