export default function AnnouncementBar() {
    return (
        <div className="fixed top-0 inset-x-0 z-[60] flex min-h-10 items-center justify-center bg-brand-600 px-4 py-2 sm:px-6 lg:px-8">
            <p className="text-xs sm:text-sm font-medium text-brand-cream text-center">
                India's most trusted food sourcing network is now online.{' '}
                <a href="#" className="ml-1 sm:ml-2 font-semibold underline hover:text-white transition-colors inline-block">
                    See what's new &rarr;
                </a>
            </p>
        </div>
    );
}
